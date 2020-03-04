import React, { CSSProperties } from 'react';


interface Props {
    size: string;
}

interface State {
    
}

class Header extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.styleHeaderSize = this.styleHeaderSize.bind(this)
    }


    styleHeaderSize() {
        if(this.props.size === 'desktop') {
            return HeaderStyle
        } else if(this.props.size === 'tablet') {
            return HeaderStyleTablet
        } else {
            return HeaderStyleMobile
        }
    }

    render() {
        return(
            <header style={this.styleHeaderSize()}>
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
    fontSize: '1.8rem'
}



const HeaderStyleTablet: CSSProperties = {
    height: '5rem',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'whitesmoke',
    letterSpacing: '1px',
    fontSize: '1.2rem'
}

const HeaderStyleMobile: CSSProperties = {
    height: '5rem',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '5%',
    alignItems: 'center',
    color: 'whitesmoke',
    letterSpacing: '1px',
    fontSize: '0.8rem'
}



