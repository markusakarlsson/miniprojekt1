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
    backgroundColor: 'black'


}