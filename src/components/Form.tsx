import React, { useState } from "react";

const Form: React.FC = () => {

    const[ name , setName] = useState<string>("");
    const[ checkbox , setCheckbox] = useState<boolean>(false);
    const[ title , setTitle ] = useState<string>("");
    
    const handleSubmit = () => {
        console.log(`Name: ${name}, Title: ${title}, Checked?: ${checkbox}`);
    }

    return(
        <>
            <select value={title} onChange={(event)=>{setTitle(event.target.value)}}>
                <option>Ms.</option>
                <option>Mrs.</option>
                <option>Mr.</option>
            </select><input onChange={event=>setName(event.target.value)}/>
            <input type="checkbox" 
            checked={checkbox} 
            onClick={()=>{setCheckbox(!checkbox)}}/>
            <p>Printing: Name: {title} {name}</p>
            <button onClick={handleSubmit}></button>
        </>
    )
}

export default Form;