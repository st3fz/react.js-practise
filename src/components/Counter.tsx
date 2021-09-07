import React from "react";
import ReactTooltip from "react-tooltip";

// import { FontAwesomeIcon } from 'react-icons/fa';

interface Props {
    initialCount: number;
}

interface State {
    count: number;
}

export default class Counter extends React.Component<Props, State> {
    constructor(props : Props){ 
        super(props);
        
        this.state= {
            count: props.initialCount
        }
    }
    
    handleIncrement = () => {
        this.setState(
            { count: this.state.count + 1}
        )
    }

    handleDecrement = () => {
        this.setState(
            { count: this.state.count - 1}
        )
    }
    
    render() {
        return(
            <div>
                <ReactTooltip id="counter-info">
                    <span>A random number is generated to start you off each time the page is refreshed</span>
                </ReactTooltip>
                
                <h1>Count: {this.state.count}
                    <span data-tip data-for="counter-info">
                        {/* <FontAwesomeIcon icon={faQuestionCircle}/> */}
                    </span>
                </h1>
                <button className="btn btn-dark" onClick={this.handleDecrement}>decrement</button>
                <button className="btn btn-light" onClick={this.handleIncrement}>increment</button>
            </div>
        )
    }
}