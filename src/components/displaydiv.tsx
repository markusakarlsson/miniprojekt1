import React, { CSSProperties } from 'react';



class DisplayDiv extends React.Component<{},{}> {


    
    render() {
        return(
            <div style={DisplayStyle}>
                <div>MARKU</div>
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