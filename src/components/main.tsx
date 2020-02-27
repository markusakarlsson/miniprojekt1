import React, { CSSProperties } from 'react';
import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';




class MainComponent extends React.Component {


    render() {
        return (
            <main style={MainStyle}>
                <Header />
                <Sidebar />
                <Footer />
            </main>
        )
    }
}


export default MainComponent




const MainStyle: CSSProperties = {
    height: '100%',
    // backgroundColor: 'var(--color1)',
    backgroundImage: 'url("https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1991&q=80")',
    backgroundPosition: 'center'


}

// #D7F2BA #BDE4A8 #9CC69B #79B4A9 #676F54