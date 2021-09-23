import React, { useEffect } from "react";
import ReactTooltip from "react-tooltip";

import { FaQuestionCircle, FaRedoAlt } from 'react-icons/fa';

interface Props {
    setId: React.Dispatch<React.SetStateAction<{data: number, componentRef: React.RefObject<HTMLDivElement>}>>;
    id : {data: number, componentRef:React.RefObject<HTMLDivElement>};
}

const Id : React.FC<Props> = ( props : Props ) => {
    
    var idData = {...props.id};

    useEffect(()=>{
        props.setId(idData);
    }, [idData]);

    const generateNewId = () => {
        idData.data = Math.floor( Math.random()*1000 ) + 1; 
    }

    useEffect(()=>{
        generateNewId();
    },[])

    const modifyId = (sign : string) => {
        if ( sign === "+" ) idData.data = idData.data + 1 ;
        else idData.data = idData.data - 1 ;
    }

    return(
        <div>
            <ReactTooltip id="counter-info">
                <p>A random ID is generated each time you click refresh</p>
                <p className="text-bold">What is ID?</p>
                <p className="text-bold">Your ID is added to the back of your username, to always ensure that you have a unique username</p>
            </ReactTooltip> 
            <h2>Your ID: {idData.data}
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