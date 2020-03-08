import React, { CSSProperties } from 'react';
import Item from './item';
import DisplayImg from './displayimg';
import ErrorBoundary from './../errorboundary';

import { AllItems } from './sidebardiv';


interface Props {
    items: AllItems[]
    size: string
    data: []
    dataId: string
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


    displayImg(dataId: string) {
        this.setState(state => ({
            toggle: true,
            index: dataId,
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
                            <ul style={this.props.size === 'desktop' ? UlStyle : UlStyleMobile}>
                                {this.props.data.map((data) => <Item size={this.props.size} displayFunc={() => this.displayImg(this.props.dataId)} dataImg={data} />)}
                                {/* displayFunc={() => this.displayImg(data.id)} */}
                                }
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
                        <DisplayImg size={this.props.size} data={this.props.data[Number(this.state.index)]} dataId={this.state.index} displayNone={this.displayNone} />
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

const UlStyleMobile: CSSProperties = {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    listStyleType: 'none',
    flexDirection: 'column',
}