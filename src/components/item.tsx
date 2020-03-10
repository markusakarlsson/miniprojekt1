import React, { CSSProperties } from 'react';
import ErrorBoundary from './../errorboundary';
import { Link } from 'react-router-dom'



interface Props {
    displayFunc: () => void;
    size: string
    dataImg: any
}

interface State {

}

class Item extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        
        const image = new Image()
        image.onload = () => console.log('image is loaded')
        image.src = props.dataImg
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

    /* {(null as any).test} */
    render() {
        return (
            <Link to={"/images/" + this.props.dataImg.id} style={LiStyleDesktop}>
                <ErrorBoundary>
                    <li key={this.props.dataImg.id}  
                    onClick={this.props.displayFunc}
                     style={this.styleItemSize()}>
                        <p style={TitleStyle}>{this.props.dataImg.earth_date}</p>
                        <img style={this.props.size === 'desktop' ? ImgStyle : ImgStyleMobile} src={this.props.dataImg.img_src} alt={this.props.dataImg.id} />
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