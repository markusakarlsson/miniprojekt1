import React, { CSSProperties, ErrorInfo } from 'react';
import Items from './items';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AnyNaptrRecord } from 'dns';
import { PhotoManifestData, ManifestData, PhotoData } from '../apiTypes';


import { PulseSpinner } from "react-spinners-kit";

interface Props {
    size: string
}

interface State {
    isLoading: boolean
    sol: number
    items: []
    data: PhotoData[]
    filteredList: PhotoManifestData[]
    value: number
}

class SidebarDiv extends React.Component<Props, State> {
    private readonly APIKey: string = "hTSax0xjObcGX6GTkOEnKgLLmEALMhW0vuB7We8v";
    private readonly manifest: string = "manifests";
    private readonly camera: string = "NAVCAM";
    private readonly selectedRover: string = "Curiosity";
    private readonly URL: string = 'https://api.nasa.gov/mars-photos/api/v1/' + this.manifest + "/" + this.selectedRover + "?api_key=" + this.APIKey;


    constructor(props: Props) {
        super(props)
        this.state = {
            isLoading: true,
            items: [],
            data: [],
            sol: 1,
            filteredList: [],
            value: 0,
        }
    }



    async componentDidMount() {
        const response = await fetch(this.URL)
        const data: ManifestData = await response.json()
        console.log('HERE', data)
        const filteredList = this.filterManifest(data)
        this.setState({ filteredList }, () => {
            this.loadImages()
        })
    }


    filterManifest(data: ManifestData) {
        return data.photo_manifest.photos.filter((photo) => {
            let cameraExists = false;
            photo.cameras.forEach((camera) => {
                if (camera === "NAVCAM") {
                    cameraExists = true
                }
            });
            return cameraExists
        })
    }

    async loadImages() {
        this.setState({ isLoading: true })

        const { filteredList } = this.state
        // filteredList[0].sol
        const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/' + 'curiosity/photos?sol=' + this.state.sol + '&page=1&camera=' + this.camera + "&api_key=" + this.APIKey);

        const data = await response.json()
        console.log("data", data)
        console.log("data.photos", data.photos)
        console.log(this.state.filteredList.length)

        this.setState({
            data: data.photos,
            isLoading: false,
            filteredList: filteredList,
        })

    }


    timer: any
    handleSliderChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        clearTimeout(this.timer)
        this.setState({ value: Number(event.target.value) })
        this.setState({ sol: this.state.filteredList[this.state.value].sol })
        this.timer = setTimeout(() => {
            this.loadImages()
            console.log("funkar detta?")
        }, 2000)
    }


    render() {
        if (this.state.isLoading) {
            { console.log("spinner") }
            return (
                <>
                    <div style={SpinnerStyle}>
                        <PulseSpinner />
                    </div>
                </>
            )
        }
        return (
            <div style={DisplayStyle}>
                <h3 style={H3Style}>Sol (day on Mars) {this.state.value}</h3>
                <div style={RangeInput}>
                    <Items handleSliderChanged={this.handleSliderChanged} defaulValue={this.state.value} max={this.state.filteredList.length} size={this.props.size} data={this.state.data} />
                </div>
            </div>
        )
    }
}


export default SidebarDiv;

const DisplayStyle: CSSProperties = {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,0.5)',
    minHeight: '100vh',
    // backgroundImage:
    //     'url(https://images.unsplash.com/photo-1435224668334-0f82ec57b605?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80)',
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',

}

const SpinnerStyle: CSSProperties = {
    zIndex: 3000,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
}

const RangeInput: CSSProperties = {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80rem',
    paddingTop: '2rem',
    zIndex: 3555,
    // flexGrow: '1',
}

const H3Style: CSSProperties = {
    color: 'white',
    marginTop: '7rem'
}