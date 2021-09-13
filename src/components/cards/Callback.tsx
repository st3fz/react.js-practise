import { Component, useEffect, useState } from "react";

interface Props {
    setFullName: React.Dispatch<React.SetStateAction<string>>;
}

const Callback : React.FC<Props> = (props : Props) => {
    return (
        <>
        <form>
            <h3>Whatever you type and send here will be sent to the parent container!: </h3>
            <input onChange={e=>props.setFullName(e.target.value)}></input>
            <button type="submit">Send</button>
            
        </form>
        </>
    )
}

export default Callback;