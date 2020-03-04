import React, { CSSProperties } from 'react';
import ErrorBoundary from './../errorboundary';
import { Link } from 'react-router-dom'

import { AllItems } from './sidebardiv';


interface Props {
    item: AllItems
    displayFunc: () => void;
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
                <li key={this.props.item.id} onClick={this.props.displayFunc} style={LiStyle}>
                    <img style={ImgStyle} src={this.props.item.item} alt={this.props.item.alt} />
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

const ImgStyle: CSSProperties = {
    height: '14rem',
    width: 'auto',
}