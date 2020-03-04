import React, { CSSProperties } from 'react';


interface Props {
    size: string;
}

interface State {
    
}

class Header extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }


    render() {
        return(
            <header style={this.props.size === 'desktop' ? HeaderStyle : HeaderStyleMobile}>
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
    letterSpacing: '3px',
    fontSize: '2rem'
}

const HeaderStyleMobile: CSSProperties = {
    height: '3rem',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'whitesmoke',
    letterSpacing: '1.5px',
    fontSize: '1.5rem'
}