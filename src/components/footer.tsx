import React, { CSSProperties } from 'react';


interface Props {
    size: string;
}

interface State {
    
}

class Footer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        if(this.props.size === 'desktop') {

            return (
                <footer style={FooterStyle}>
                <p><img style={iconStyle} src='./../assets/info-solid.svg' alt='info' /></p>
                <p><img style={iconStyle} src='./../assets/instagram-brands.svg' alt='instagram' /></p>
                <p><img style={iconStyle} src='./../assets/comment-regular.svg' alt='chat' /></p>
            </footer>
        )
    } else {
        return(
            null
        )
    }
    }
}

export default Footer

const FooterStyle: CSSProperties = {
    height: '5rem',
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    position: 'absolute',
    bottom: '0',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: 'whitesmoke',
}

const iconStyle: CSSProperties = {
    height: '2.5rem',
    width: '2.5rem',

}