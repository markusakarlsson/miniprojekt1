import React, { CSSProperties } from 'react';
import SidebarDiv from './sidebardiv';

import { Link } from 'react-router-dom';


interface Props {
    size: string
}

interface State {
    toggle: boolean
}


class Sidebar extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
            toggle: false
        }
        this.clickSidebar = this.clickSidebar.bind(this)
    }

    clickSidebar(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        this.setState(state => ({
            toggle: !state.toggle
        }))
    }


    styleSidebarSize() {
        if(this.props.size === 'desktop') {
            return SidebarStyleDesktop
        } else if(this.props.size === 'tablet') {
            return SidebarStyleTablet
        } else {
            return SidebarStyleMobile
        }
    }

    styleIconSize() {
        if(this.props.size === 'desktop') {
            return IconStyleDesktop
        } else if(this.props.size === 'tablet') {
            return IconStyleTablet
        } else {
            return IconStyleMobile
        }
    }
    render() {
        return (
            <>
                <Link to="/images">
                    <aside>
                        <div onClick={this.clickSidebar} style={this.styleSidebarSize()}>
                            <div className='icon-move'>
                                <i style={this.styleIconSize()} className="fas fa-rocket"></i>
                        </div>
                    </div>
                </aside>
            </Link>

                {
            this.state.toggle && (
                <Link to="">
                    <div style={displayStyle}>
                        <SidebarDiv size={this.props.size} />
                    </div>
                </Link>
            )
        }
            </>
        )
    }
}

export default Sidebar


const displayStyle: CSSProperties = {
    marginTop: '-5rem',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgb(236, 236, 236)',
}

const IconStyleDesktop: CSSProperties = {
    zIndex: 1500,
    color: 'white',
    marginLeft: '-6.5rem',
    marginTop: '-2rem',
    fontSize: '3rem',
    transform: 'rotate(225deg)',
}
const IconStyleTablet: CSSProperties = {
    zIndex: 1500,
    color: 'white',
    marginLeft: '-6.5rem',
    marginTop: '-2rem',
    fontSize: '2.4rem',
    transform: 'rotate(225deg)',
}
const IconStyleMobile: CSSProperties = {
    zIndex: 1500,
    color: 'white',
    marginLeft: '-6.5rem',
    marginTop: '-2rem',
    fontSize: '2rem',
    transform: 'rotate(225deg)',
}

const SidebarStyleDesktop: CSSProperties = {
    top: '-6.5rem',
    left: '-2rem',
    width: '0',
    height: '0',
    borderTop: '10rem solid transparent',
    borderBottom: '10rem solid transparent',
    borderLeft: '10rem solid var(--color4)',
    transform: 'rotate(225deg)',
    position: 'fixed',
}

const SidebarStyleTablet: CSSProperties = {
    top: '-6.5rem',
    left: '-2rem',
    width: '0',
    height: '0',
    borderTop: '8.5rem solid transparent',
    borderBottom: '8.5rem solid transparent',
    borderLeft: '8.5rem solid var(--color4)',
    transform: 'rotate(225deg)',
    position: 'fixed',
}

const SidebarStyleMobile: CSSProperties = {
    top: '-6.5rem',
    left: '-2rem',
    width: '0',
    height: '0',
    borderTop: '7.5rem solid transparent',
    borderBottom: '7.5rem solid transparent',
    borderLeft: '7.5rem solid var(--color4)',
    transform: 'rotate(225deg)',
    position: 'fixed',
}
