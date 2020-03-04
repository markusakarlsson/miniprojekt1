import React, { CSSProperties } from 'react';
import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';

interface Props {
    size: string
}

interface State {

}


class MainComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        console.log(this.props.size);
        return (
            <>
                <main style={this.props.size === 'desktop' ? MainStyle : MainStyleMobile } >
                    <Header size={this.props.size} />
                    <Link to="/">
                        <Sidebar size={this.props.size} />
                    </Link>
                    <Footer size={this.props.size} />
                </main>
            </>

        )
    }
}


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