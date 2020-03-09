import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

import { PhotoManifestData, ManifestData, PhotoData } from '../apiTypes';
import ErrorBoundary from '../errorboundary';

interface Props {
    displayNone: () => void;
    size: string
    photoData: PhotoData
}

interface State {

}


class DisplayImg extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <Link to={"/images"}>
                <div style={BigImgDivStyle} onClick={this.props.displayNone} key={this.props.photoData.id}>
                    <p style={PStyle}>{this.props.photoData.id}</p>
                    <img style={BigImgStyle} src={this.props.photoData.img_src} alt={this.props.photoData.earth_date} />
                </div>
            </Link>
        )
    }
}


export default DisplayImg;

const PStyle: CSSProperties = {
    zIndex: 2500,
    position: 'fixed',
    top: 0,
    fontSize: '2rem',
}


const BigImgDivStyle: CSSProperties = {
    zIndex: 2000,
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}

const BigImgStyle: CSSProperties = {
    zIndex: 1000,
    // display: 'block',
    border: 'solid black 10px',
    height: 'auto',
    width: '80%',
}
