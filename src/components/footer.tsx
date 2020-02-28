import React, { CSSProperties } from 'react';


class Footer extends React.Component {


    render() {
        return (
            <footer style={FooterStyle}>
                <p><img style={iconStyle} src='./assets/info-solid.svg' /></p>
                <p><img style={iconStyle} src='./assets/instagram-brands.svg' /></p>
                <p><img style={iconStyle} src='./assets/comment-regular.svg' /></p>
            </footer>
        )
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