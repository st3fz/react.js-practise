import React, { useState } from "react";


const Authentication: React.FC = () => {

    const[name , setName] = useState<string>("");
    const[checkbox , setCheckbox] = useState<boolean>(false);
    const[title , setTitle ] = useState<string>("");
    
    const handleSubmit = (event:any) => {
        event.preventDefault();
    }
    
    return(
        <>
        <form onSubmit={handleSubmit}>
            <select value={title} onChange={e=>{setTitle(e.target.value)}}>
                <option>Ms.</option>
                <option>Mrs.</option>
                <option>Mr.</option>
            </select><input onChange={e=>setName(e.target.value)}/>
            <input type="checkbox" 
            checked={checkbox} 
            onClick={()=>{setCheckbox(!checkbox)}}/>
            <p>Printing: Name: {title} {name}</p>
            <button type="submit">change</button>
        </form>
        </>
    )
}

export default Authentication;