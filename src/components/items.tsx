import React, { CSSProperties } from 'react';
import  Item  from './item';

import { AllItems } from './displaydiv';


interface Props {
    items: AllItems[]
}

interface State {

}

class Items extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.items.map((item) => <Item allItems={item}/>)}
                </ul>
            </div>
        )

    }
}

export default Items;