import React, { CSSProperties } from 'react';
import Items from './items';

export interface AllItems {
    title: string
    item: string
    alt: string
}
interface Props {}

interface State {
    allItems: AllItems[]
}
class DisplayDiv extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            allItems: [{
                title: 'mars',
                item: 'https://images.unsplash.com/photo-1538551868183-edf7bfc50391?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80', 
                alt: 'space stuff'
                }, { 
                title: 'mars',
                    item: 'https://images.unsplash.com/photo-1538551868183-edf7bfc50391?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80', 
                    alt: 'space stuff'
            }, { 
                title: 'mars',
                item: 'https://images.unsplash.com/photo-1538551868183-edf7bfc50391?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80', 
                alt: 'space stuff'
            }, { 
                title: 'mars',
                item: 'https://images.unsplash.com/photo-1538551868183-edf7bfc50391?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80', 
                alt: 'space stuff'}
            ,  { 
                title: 'mars',
                item: 'https://images.unsplash.com/photo-1538551868183-edf7bfc50391?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80', 
                alt: 'space stuff'}
            ,  { 
                title: 'mars',
                item: 'https://images.unsplash.com/photo-1538551868183-edf7bfc50391?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                alt: 'space stuff'
            }]
        }
    }


    render() {
        return (
            <div style={DisplayStyle}>

                <Items items={this.state.allItems} />
            </div>
        )
    }


}

export default DisplayDiv;

const DisplayStyle: CSSProperties = {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

}