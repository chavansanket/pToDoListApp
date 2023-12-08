import React from 'react';

const FirstComponent = ({dat,fn}) => {
    return (
        <div>
            First component
            {dat}
            <br/>
            <button onClick={()=>{fn(10)}}>set x=10</button>
        </div>
    
    )
}


export default FirstComponent; 