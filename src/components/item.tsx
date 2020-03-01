import React, { CSSProperties } from 'react';
import { AllItems } from './displaydiv';

interface Props {
    allItems: AllItems
}
interface State {

}


class Item extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

    }

    render() {
        return(
            <li>{ this.props.allItems.item }</li>
        )
    }
}




export default Item;