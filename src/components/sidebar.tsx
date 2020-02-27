import React, { CSSProperties } from 'react';

class Sidebar extends React.Component {


    hoverHover(e: any) {
        e.target.style.background = 'blue';
    }
    render() {
        return (
            <aside 
            // style={SidebarStyle}
            >
                <div onMouseOver={this.hoverHover} style={arrowRight}>
                    <i style={icon} className="fas fa-rocket"></i>
                </div>
            </aside>
        )
    }
}

export default Sidebar

// const SidebarStyle: CSSProperties = {
//     position: 'fixed',
//     zIndex: 1000,
// }

const icon: CSSProperties = {
    zIndex: 1500,
    color: 'white'
}

const arrowRight: CSSProperties = {
    marginTop: '-11rem',
    marginLeft: '-2rem',
    width: '0',
    height: '0',
    borderTop: '10rem solid transparent',
    borderBottom: '10rem solid transparent',
    borderLeft: '10rem solid var(--color1)',
    transform: 'rotate(225deg)',
}
