import React, { CSSProperties } from 'react';
import Item from './item';
import DisplayImg from './displayimg';
import ErrorBoundary from './../errorboundary';



import { PhotoData } from '../apiTypes';


interface Props {
    size: string
    data: PhotoData[]
    handleSliderChanged: (event: React.ChangeEvent<HTMLInputElement>) => void;
    max: number
    defaulValue: number
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
                        {
                  this.props.size === "desktop" ? 
                  <input defaultValue={this.props.defaulValue} style={RangeInput} onChange={this.props.handleSliderChanged} id="typeinp" type="range" min="0" max={this.props.max} step="1"/> 
                  : <input style={NumInput} type="number" onChange={this.props.handleSliderChanged} id="quantity" name="quantity" min="0" max={this.props.max}></input>
                }
                        <div>
                        
                            <ul style={this.props.size === 'desktop' ? UlStyle : UlStyleMobile}>
                                {this.props.data.map((data, index) => <Item size={this.props.size} displayFunc={() => this.displayImg(index)} dataImg={data} />)}
                            </ul>
                        </div>
                </>
                </ErrorBoundary>

            )
        } else {
            return (
                <ErrorBoundary>
                    <>
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
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    marginTop: '8rem'
    // flexGrow: '1'
}

const NumInput: CSSProperties = {
    height: '2rem',
    width: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    // flexGrow: '1'
}

