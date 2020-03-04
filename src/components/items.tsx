import React, { CSSProperties } from 'react';
import Item from './item';
import DisplayImg from './displayimg';
import ErrorBoundary from './../errorboundary';

import { AllItems } from './sidebardiv';


interface Props {
    items: AllItems[]
}

interface State {
    toggle: boolean
    index: string
}

class Items extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            toggle: false,
            index: ''
        }

        this.displayImg = this.displayImg.bind(this)
        this.displayNone = this.displayNone.bind(this)
    }


    displayImg(id: string) {
        this.setState(state => ({
            toggle: true,
            index: id,
        }))
    }

    displayNone() {
        this.setState(state => ({
            toggle: false,
        }))
    }

    render() {

        if (!this.state.toggle) {
            return (
                <ErrorBoundary>
                    <>
                        <div>
                            <ul style={UlStyle}>
                                {this.props.items.map((item) => <Item displayFunc={() => this.displayImg(item.id)} item={item} />)}
                            </ul>
                        </div>
                        }
                </>
                </ErrorBoundary>

            )
        } else {
            return (
                <ErrorBoundary>
                    <>
                        {console.log(this.state.index)};
                <DisplayImg item={this.props.items[Number(this.state.index) - 1]} displayNone={this.displayNone} />
                    </>
                </ErrorBoundary>
            )
        }
    }

}


export default Items;

const UlStyle: CSSProperties = {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    listStyleType: 'none',
    flexWrap: 'wrap'
}