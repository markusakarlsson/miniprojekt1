import React, { CSSProperties } from 'react';


class Header extends React.Component {

    render() {
        return(
            <header style={HeaderStyle}>
                <h1>SPACE PROJECT</h1>
            </header>
        )
    }
}

export default Header

const HeaderStyle: CSSProperties = {
    height: '5rem',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'whitesmoke',
    letterSpacing: '3px'
}