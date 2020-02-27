import React, { CSSProperties } from 'react';

class Sidebar extends React.Component {

    render() {
        return (
            <aside style={SidebarStyle}>
                <ul style={UlStyle}>
                    <li style={LiStyle}>hehe</li>
                    <li style={LiStyle} >haha</li>
                    <li style={LiStyle}>höhö</li>
                </ul>
            </aside>
        )
    }
}

export default Sidebar

const SidebarStyle: CSSProperties = {
    margin: '10% 0 10% 80%',
    backgroundColor: 'green',
    width: '10rem',
    position: 'fixed',
    zIndex: 1000,
}

const UlStyle: CSSProperties = {
    listStyleType: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center',
    alignItems: 'center'

}

const LiStyle: CSSProperties ={
    width: '4rem',
    height: '4rem',
    display: 'flex',
    justifyItems: 'center',
    alignItems: 'center'
}