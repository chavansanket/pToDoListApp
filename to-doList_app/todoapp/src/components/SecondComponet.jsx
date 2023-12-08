import { useRef, useState } from "react";

const SecondComponent=()=>{

    const [data,setData]=useState([]);
    const inputRef=useRef(null);


    return<>

        <h2>Second Component</h2>
        <input ref={inputRef} type='text'/>
        {/* <button onClick={()=>{console.log(inputRef)}}>Submit</button> */}
        <button onClick={()=>{setData([...data,inputRef.current.value])}}>Submit</button>
        {data.map((item,index)=>{return<h3 key={index}>{item}</h3>})

        }

    </>

}

export default SecondComponent;