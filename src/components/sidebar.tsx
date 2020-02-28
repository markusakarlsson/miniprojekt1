import React, { CSSProperties } from 'react';
import DisplayDiv from './displaydiv';



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
        this.clickSidebar = this.clickSidebar.bind(this)
    }

    clickSidebar(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        this.setState(state => ({
            toggle: !state.toggle
        }))
        console.log(this.state.toggle);




    }
    render() {
        return (
            <>
                <aside>
                    <div onClick={this.clickSidebar} style={this.state.toggle ? arrowRight2 : arrowRight}>
                        <div className='icon-move'>
                        <i style={icon} className="fas fa-rocket"></i>
                        </div>
                    </div>
                </aside>
                {this.state.toggle && (
                    <div style={displayStyle}>
                        <DisplayDiv />
                    </div>
                )}
            </>
        )
    }
}

export default Sidebar


const displayStyle: CSSProperties = {
    height: '100%',

    width: '100%',
    zIndex: 1500,
    backgroundColor: 'var(--color2)',
    borderRadius: '5px',
}

const icon: CSSProperties = {
    zIndex: 1500,
    color: 'white',
    marginLeft: '-6.5rem',
    marginTop: '-2rem',
    fontSize: '3rem',
    transform: 'rotate(225deg)'
}

const arrowRight: CSSProperties = {
    top: '-6.5rem',
    left: '-2rem',
    width: '0',
    height: '0',
    borderTop: '10rem solid transparent',
    borderBottom: '10rem solid transparent',
    borderLeft: '10rem solid var(--color1)',
    transform: 'rotate(225deg)',
    position: 'fixed',
}

const arrowRight2: CSSProperties = {
    top: '-6.5rem',
    left: '-2rem',
    position: 'fixed',
    width: '0',
    height: '0',
    borderTop: '10rem solid transparent',
    borderBottom: '10rem solid transparent',
    borderLeft: '10rem solid var(--color3)',
    transform: 'rotate(225deg)',
}






