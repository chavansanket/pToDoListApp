import { useState } from "react";

const Navbar=()=>{
    const [y,setY]=useState(0);
    // let x=0;

    const btnClick=()=>{
        console.log("onClicked");
        // x++ ;
        // console.log(x);
        // react interface is changing only when the state is changing
        setY(y+1);
      }

    return(
        <div>
            {/* {x} */}
            <h1>Navbar</h1>
            {y}
            <br/>
            <br/>
            <button onClick={()=>{btnClick()}}>Click Me</button>
            
            {/* when parameters need to be passed then use above  {/* Example 1: Passing a constant parameter */}
      {/* <button onClick={() => btnClick(1)}>Increment by 1</button> */} 
      <button onClick={btnClick}>2nd</button>
        </div>
    )
}

export default Navbar;