import React, { CSSProperties } from 'react';
import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';
import SidebarDiv from './sidebardiv';
import { Link, Router, Switch, Route } from 'react-router-dom';

interface Props {
    size: string
}

interface State {
    toggleSidebar: boolean
}


class MainComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            toggleSidebar: false
        }

        this.clickSidebar = this.clickSidebar.bind(this)
    }

    clickSidebar() {
        /* this.setState(state => ({
            toggleSidebar: !state.toggleSidebar
        })) */
    }


    render() {
        console.log(this.props.size);
        return (
            <>
                <main style={this.props.size === 'desktop' ? MainStyle : MainStyleMobile} >

                    <Switch>
                        <Route exact path="/">
                            <Header overflow={this.state.toggleSidebar} size={this.props.size} />
                            <Sidebar size={this.props.size} path="/images" sidebarToggle={this.clickSidebar} />
                            <Footer overflow={this.state.toggleSidebar} size={this.props.size} />
                        </Route>
                        <Route path="/images">
                            <SidebarDiv size={this.props.size} />
                            <Sidebar size={this.props.size} path="/" sidebarToggle={this.clickSidebar} />
                        </Route>
                    </Switch>


                </main>
            </>

        )
    }
}

//<SidebarDiv size={this.props.size} />

export default MainComponent




const MainStyle: CSSProperties = {
    height: '100%',
    // backgroundColor: 'var(--color1)',
    backgroundImage:
        'url(https://images.unsplash.com/photo-1435224668334-0f82ec57b605?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80)',
    // 'url("./assets/space.jpg")',
    backgroundPosition: 'center',
    // objectFit: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
}


const MainStyleMobile: CSSProperties = {
    // backgroundColor: 'yellow'
}
// #D7F2BA #BDE4A8 #9CC69B #79B4A9 #676F54