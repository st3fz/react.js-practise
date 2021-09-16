import { Component, useEffect, useState } from "react";

interface Props {
    setUsername: React.Dispatch<React.SetStateAction<string>>;
}

const Username : React.FC<Props> = (props : Props) => {
    return (
        <>
        <form>
            <h3>Pick a username: </h3>
            <input className="text-align-center" 
            onChange={e=>props.setUsername(e.target.value)}></input>
        </form>
        </>
    )
}

export default Username;