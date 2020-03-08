import React, { CSSProperties, ErrorInfo } from 'react';
import Items from './items';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AnyNaptrRecord } from 'dns';




interface data {
    id: number
    sol: number
    img_src: string
    earth_date: string
    cameras: {
        id: number
        name: string
        rover_id: number
        full_name: string
    }
    _proto_: any

}





export interface AllItems {
    id: string
    title: string
    item: string
    alt: string
}

interface Props {
    size: string
}

interface State {
    allItems: AllItems[]
    loaded: boolean
    items: []
    data: []
    dataId: string
}

class SidebarDiv extends React.Component<Props, State> {
    private APIKey: string = "hTSax0xjObcGX6GTkOEnKgLLmEALMhW0vuB7We8v";
    private manifest: string = "manifests";
    private camera: string = "NAVCAM";
    private selectedRover: string = "Curiosity";
    private URL: string = 'https://api.nasa.gov/mars-photos/api/v1/' + this.manifest + "/" + this.selectedRover + "?api_key=" + this.APIKey;


    constructor(props: Props) {
        super(props)
        this.state = {
            loaded: false,
            items: [],
            data: [],
            dataId: '',
            allItems: [{
                id: '1',
                title: 'mars',
                item: 'https://images.unsplash.com/photo-1538551868183-edf7bfc50391?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                alt: 'space stuff'
            }, {
                id: '2',
                title: 'spaceman',
                item: 'https://images.unsplash.com/photo-1573588028698-f4759befb09a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80',
                alt: 'space man'
            }, {
                id: '3',
                title: 'mars',
                item: 'https://images.unsplash.com/photo-1538551868183-edf7bfc50391?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                alt: 'space stuff'
            }, {
                id: '4',
                title: 'mars',
                item: 'https://images.unsplash.com/photo-1538551868183-edf7bfc50391?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                alt: 'space stuff'
            }
                , {
                id: '5',
                title: 'mars',
                item: 'https://images.unsplash.com/photo-1538551868183-edf7bfc50391?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                alt: 'space stuff'
            }
                , {
                id: '6',
                title: 'mars',
                item: 'https://images.unsplash.com/photo-1538551868183-edf7bfc50391?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                alt: 'space stuff'
            }]
        }
    }



    async componentDidMount() {
        const response = await fetch(this.URL)
        const data = await response.json()
        const filterdList = this.filterManifest(data)
        this.loadImages(filterdList)
    }


    filterManifest(data: any) {
        let filterdList = data.photo_manifest.photos.filter((photo: any) => {
            let cameraExists = false;
            photo.cameras.forEach((camera: string) => {
                if (camera === "NAVCAM") {
                    cameraExists = true
                }
            });
            return cameraExists
        })
        // console.log(filterdList);
    }

    async loadImages(filterdList: any) {
        const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/' + 'curiosity/photos?sol=1&page=1&camera=' + this.camera + "&api_key=" + this.APIKey)
        console.log('https://api.nasa.gov/mars-photos/api/v1/rovers' + 'curiosity/photos?sol=1&page=1&camera=' + this.camera + "&api_key=" + this.APIKey);

        const data = await response.json()
        console.log("data", data)
        console.log("data.photos", data.photos)
        console.log("data.photos", data.photos)

        this.setState({
            data: data.photos,
            dataId: data.id
        })

    }







    render() {
        return (
            <div style={DisplayStyle}>
                <Items size={this.props.size} data={this.state.data} items={this.state.allItems} dataId={this.state.dataId} />
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
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
}
