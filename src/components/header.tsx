import React, { CSSProperties } from 'react';


class Header extends React.Component {

    render() {
        return(
            <header style={HeaderStyle}>
                <h1>Miniprojekt</h1>
            </header>
        )
    }
}

export default Header

const HeaderStyle: CSSProperties = {
    height: '4rem',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'whitesmoke',
}