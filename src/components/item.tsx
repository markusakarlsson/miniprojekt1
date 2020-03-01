import React, { CSSProperties } from 'react';
import { AllItems } from './displaydiv';

interface Props {
    allItems: AllItems
}
interface State {

}


class Item extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

    }

    render() {
        return(
            <li style={LiStyle}>
                <img style={ImgStyle} src={ this.props.allItems.item } alt={this.props.allItems.alt} />
                <p>{this.props.allItems.title}</p>
            </li>
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
    width: '16rem',
}