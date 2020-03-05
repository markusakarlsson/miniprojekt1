import React, { CSSProperties } from 'react';
import Items from './items';
import { Link } from 'react-router-dom';

export interface AllItems {
    id: string
    title: string
    item: string
    alt: string
}
interface Props { 
    size: string
}

interface State {
    allItems: AllItems[]
}
class SidebarDiv extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            allItems: [{
                id: '',
                title: 'mars',
                item: 'https://images.unsplash.com/photo-1538551868183-edf7bfc50391?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                alt: 'space stuff'
            }, {
                id: '2',
                title: 'spaceman',
                item: 'https://images.unsplash.com/photo-1573588028698-f4759befb09a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80',
                alt: 'space man'
            }, {
                id: '3',
                title: 'mars',
                item: 'https://images.unsplash.com/photo-1538551868183-edf7bfc50391?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                alt: 'space stuff'
            }, {
                id: '4',
                title: 'mars',
                item: 'https://images.unsplash.com/photo-1538551868183-edf7bfc50391?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                alt: 'space stuff'
            }
                , {
                id: '5',
                title: 'mars',
                item: 'https://images.unsplash.com/photo-1538551868183-edf7bfc50391?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                alt: 'space stuff'
            }
                , {
                id: '6',
                title: 'mars',
                item: 'https://images.unsplash.com/photo-1538551868183-edf7bfc50391?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                alt: 'space stuff'
            }]
        }
    }


    render() {
        return (
            <div style={DisplayStyle}>
                <Items size={this.props.size} items={this.state.allItems} />
            </div>

        )
    }


}

export default SidebarDiv;

const DisplayStyle: CSSProperties = {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)'

}