import React, { CSSProperties } from 'react';
import ErrorBoundary from './../errorboundary';
import { Link } from 'react-router-dom'

import { AllItems } from './sidebardiv';


interface Props {
    item: AllItems
    displayFunc: () => void;
    size: string
}
interface State {
    
}


class Item extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

    }

    render() {
        return (
            <Link to={"/images/" + this.props.item.title} style={LiStyle}>
                <ErrorBoundary>
                <li key={this.props.item.id} onClick={this.props.displayFunc} style={this.props.size === 'desktop' ? LiStyle : LiStyleMobile}>
                    <img style={this.props.size === 'desktop' ? ImgStyle : ImgStyleMobile}src={this.props.item.item} alt={this.props.item.alt} />
                    <p>{this.props.item.title}</p>
                </li>
            </ErrorBoundary>
            </Link>

        )
    }
}

export default Item;

const LiStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
    width: '30%',
}

const LiStyleMobile: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
    width: '30%',
}
const ImgStyle: CSSProperties = {
    height: '14rem',
    width: 'auto',
    overflow: 'hidden'
}

const ImgStyleMobile: CSSProperties = {
    height: '14rem',
    width: 'auto',
    overflow: 'hidden'
}