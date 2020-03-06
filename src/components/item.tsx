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

    styleItemSize() {
        if(this.props.size === 'desktop') {
            return LiStyleDesktop
        } else if(this.props.size === 'tablet') {
            return LiStyleTablet
        } else {
            return LiStyleMobile
        }
    }

    render() {
        return (
            <Link to={"/images/" + this.props.item.title} style={LiStyleDesktop}>
                <ErrorBoundary>
                    {/* {(null as any).test} */}
                    <li key={this.props.item.id} onClick={this.props.displayFunc} style={this.styleItemSize()}>
                        <p style={TitleStyle}>{this.props.item.title}</p>
                        <img style={this.props.size === 'desktop' ? ImgStyle : ImgStyleMobile} src={this.props.item.item} alt={this.props.item.alt} />
                    </li>
                </ErrorBoundary>
            </Link>
        )
    }
}

export default Item;

const TitleStyle: CSSProperties = {
    textAlign: 'center',
    color: 'white',
    textDecoration: 'none',
}

const LiStyleDesktop: CSSProperties = {
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
    width: '30%',
    padding: '1rem',
}

const LiStyleTablet: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
    width: '30%',
    padding: '1rem',
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
    height: '10rem',
    width: 'auto',
    overflow: 'hidden'
}

const ImgStyleMobile: CSSProperties = {
    height: '14rem',
    width: 'auto',
    overflow: 'hidden'
}