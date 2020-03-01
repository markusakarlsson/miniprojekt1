import React, { CSSProperties } from 'react';
import Items from './items';

export interface AllItems {
    item: string
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
                 item: 'test1', 
            }, { 
                item: 'test2', 
            }, { 
                item: 'test3', 
            }, { 
                item: 'test4', 
            },  { 
                item: 'test5', 
            },  { 
                item: 'test6',
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
    // backgroundColor: 'var(--color3)',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

}