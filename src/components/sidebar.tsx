import React, { CSSProperties } from 'react';



interface Props { }

interface State {
    toggle: boolean
}


class Sidebar extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
            toggle: false
        }
        this.hoverHover = this.hoverHover.bind(this)
    }

    hoverHover(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        this.setState(state => ({
            toggle: !state.toggle
        }))
        console.log(this.state.toggle);

        
        

    }
    render() {
        if(!this.state.toggle) {

            return (
                <aside>
                    
                    <div onMouseOver={this.hoverHover} style={arrowRight}>
                        <i style={icon} className="fas fa-rocket"></i>
                    </div>
                    <div onMouseOver={this.hoverHover} style={arrowRight}>
                        <i style={icon} className="fas fa-rocket"></i>
                    </div>
                </aside>
            )
        } else {
            return(
                <p>fuck</p>
                )
                
        }
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
