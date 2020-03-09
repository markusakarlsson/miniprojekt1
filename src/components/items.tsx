import React, { CSSProperties } from 'react';
import Item from './item';
import DisplayImg from './displayimg';
import ErrorBoundary from './../errorboundary';

import { PhotoData } from '../apiTypes';


interface Props {
    size: string
    data: PhotoData[]
}

interface State {
    toggle: boolean
    index: number
}

class Items extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            toggle: false,
            index: 0
        }

        this.displayImg = this.displayImg.bind(this)
        this.displayNone = this.displayNone.bind(this)
    }


    displayImg(id: number) {
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
                        <input style={RangeInput} id="typeinp" type="range" min="0" max="5" defaultValue="3" step="1"/>
                            <ul style={this.props.size === 'desktop' ? UlStyle : UlStyleMobile}>
                                {this.props.data.map((data) => <Item size={this.props.size} displayFunc={() => this.displayImg(this.props.data.id)} dataImg={data} />)}
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
                        {console.log("STATE",this.state.index)}
                        <DisplayImg size={this.props.size} photoData={this.props.data[this.state.index]} displayNone={this.displayNone} />
                    </>
                </ErrorBoundary>
            )
        }
    }

}


export default Items;

const UlStyle: CSSProperties = {
    paddingTop: '5rem',
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

const RangeInput: CSSProperties = {
    top: 10,
    right: 0,
    position: 'fixed',
}