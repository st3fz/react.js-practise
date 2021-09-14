import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";

import { FaQuestionCircle, FaRedoAlt } from 'react-icons/fa';

interface Props {
    setRandomId: React.Dispatch<React.SetStateAction<number>>;
}

const Id : React.FC<Props> = ( props : Props ) => {

    var randomNumber: number = Math.floor( Math.random()*1000 ) + 1; 
    var [ id, setId ] = useState<number>(randomNumber);
    
    useEffect(()=>{
        props.setRandomId(id);
    }, [id]);

    const generateNewId = () => {
        setId(randomNumber);
    }

    const modifyId = ( sign : string ) => {
        if ( sign === "+" ) setId( id + 1 );
        else setId( id - 1 );
    }
    
    return(
        <div>
            <ReactTooltip id="counter-info">
                <p>A random ID is generated each time you click refresh</p>
                <p className="text-bold">What is ID?</p>
                <p className="text-bold">Your ID is added to the back of your username, to always ensure that you have a unique username</p>
            </ReactTooltip> 
            <h2>Your ID: {id}
                <span data-tip data-for="counter-info">
                    <FaQuestionCircle/>
                </span>
            </h2>
            <button className="btn rounded-circle btn-dark" onClick={()=>modifyId("-")}>-</button>
            <button className="btn rounded-circle btn-dark mr-3" onClick={()=>modifyId("+")}>+</button>
            <button className="btn" onClick={()=>generateNewId()}><FaRedoAlt/></button>
        </div>
    )
    
}

export default Id;