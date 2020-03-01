import React, { CSSProperties } from 'react';
import DisplayImg from './displayimg';

import { AllItems } from './displaydiv';


interface Props {
    allItems: AllItems
}
interface State {
    toggle: boolean
}


class Item extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            toggle: false
        }
        this.displayImg = this.displayImg.bind(this)
    }

    displayImg() {
        this.setState(state => ({
            toggle: !state.toggle
        }))
        console.log(this.state.toggle);
    }

    render() {
        return (
            <>
                <li key={this.props.allItems.id} onClick={this.displayImg} style={LiStyle}>
                    <img style={ImgStyle} src={this.props.allItems.item} alt={this.props.allItems.alt} />
                    <p>{this.props.allItems.title}</p>
                </li>

                {this.state.toggle && (
                    <DisplayImg displayNone={this.displayImg} displayImg={this.props.allItems} />
                    )}
                    </>
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