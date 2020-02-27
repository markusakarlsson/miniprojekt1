import React, { CSSProperties } from 'react';


class Footer extends React.Component {
    
    render() {
        return (
            <footer style={FooterStyle}>
                <p>Stuff</p>
                <p>Stuff</p>
                <p>Stuff</p>
            </footer>
        )
    }
}

export default Footer 

const FooterStyle: CSSProperties = {
    height: '4rem',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    position: 'absolute',
    bottom: '0',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: 'whitesmoke',
}