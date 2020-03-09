import React, { CSSProperties, ErrorInfo } from 'react';
import Items from './items';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AnyNaptrRecord } from 'dns';
import { PhotoManifestData, ManifestData, PhotoData } from '../apiTypes';

interface Props {
    size: string
}

interface State {
    isLoading: boolean
    sol: number
    items: []
    data: PhotoData[]    
    filteredList: PhotoManifestData[]
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
            sol: 2539,
            filteredList: []
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
        const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/' + 'curiosity/photos?sol=2539&page=1&camera=' + this.camera + "&api_key=" + this.APIKey);

        const data = await response.json()
        console.log("data", data)
        console.log("data.photos", data.photos)
        console.log("data.photos", data.photos)

        this.setState({
            data: data.photos,
            isLoading: false
        })

    }







    render() {
        if (this.state.isLoading) {
            return null
        }

        return (
            <div style={DisplayStyle}>
                <Items size={this.props.size} data={this.state.data} />
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
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
}
