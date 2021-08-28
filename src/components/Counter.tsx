import React from "react";

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
                <div>Count: {this.state.count}</div>
                <button onClick={this.handleIncrement}>increment</button>
                <button onClick={this.handleDecrement}>increment</button>
            </div>
        )
    }
}