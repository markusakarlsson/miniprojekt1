import React, { CSSProperties} from 'react';

import { AllItems } from './displaydiv';

interface Props {
    displayImg: AllItems
    displayNone: () => void;
}

interface State {

}




class DisplayImg extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        return(
            <div style={BigImgDivStyle} onClick={this.props.displayNone} key={this.props.displayImg.id}>
                <img style={BigImgStyle} src={this.props.displayImg.item} alt={this.props.displayImg.alt} />
                <p>{this.props.displayImg.title}</p>
            </div>
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
}

const BigImgStyle: CSSProperties = {
    marginTop: '10rem',
    // display: 'block',
    border: 'solid black 10px',
    height: 'auto',
    width: '80%',
}
