import { Component, useEffect } from "react";
import './Username.css';

interface Props {
    setUsername: React.Dispatch<React.SetStateAction<{data: string, componentRef: React.RefObject<HTMLDivElement>}>>;
    username : {data: string, componentRef:React.RefObject<HTMLDivElement>};
    id : {data: number, componentRef:React.RefObject<HTMLDivElement>};
}

const Username : React.FC<Props> = (props : Props) => {
    
    var usernameData = {...props.username};

    useEffect(()=>{
        props.setUsername(usernameData);
    },[usernameData])

    return (
        <>
        <form>
            <h3>Pick a username: </h3>
            <input className="text-align-center" 
            onChange={e=>usernameData.data = e.target.value}></input>
        </form>
        { usernameData.data==="" ? null 
        : <h5>Your username will be displayed as:<span className="larger"> {usernameData.data}#{props.id.data}</span></h5>}
        
        </>
    )
}

export default Username;