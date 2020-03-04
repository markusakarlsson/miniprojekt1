import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

import { AllItems } from './sidebardiv';

interface Props {
    item: AllItems
    displayNone: () => void;
    size: string
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
                <div style={BigImgDivStyle} onClick={this.props.displayNone} key={this.props.item.id}>
                    <img style={BigImgStyle} src={this.props.item.item} alt={this.props.item.alt} />
                    <p>{this.props.item.title}</p>
                </div>
                <div onClick={this.props.displayNone}>hejsh</div>
            </Link>
        )
    }
}


export default DisplayImg;

const BigImgDivStyle: CSSProperties = {
    zIndex: 2000,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(0, 0, 0, 0.65)'
}

const BigImgStyle: CSSProperties = {
    marginTop: '10rem',
    // display: 'block',
    border: 'solid black 10px',
    height: 'auto',
    width: '80%',
}
