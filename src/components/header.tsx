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
    backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}