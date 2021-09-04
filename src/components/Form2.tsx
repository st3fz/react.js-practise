import { Component } from "react";

interface State {
    name: string;
    email: string;
    password: string;
    nameError: string;
    emailError: string;
    passwordError: string;
}

interface Props {}

export default class Form2 extends Component<Props,State> {

    constructor(props:Props){
        super(props);
        this.state = {
            name: "",
            email: "",
            password:"",
            nameError: "",
            emailError: "",
            passwordError: ""
        }
    } 

    handleChange = (event:any) => {
        console.log(event.target.name);
        // this.setState(
        //     { [event.target.name] : event.target.value}
        // );
    }

    render() {
        return (
            <form>
                <input 
                name="name" 
                value={this.state.name} 
                placeholder="name" 
                onChange={this.handleChange}/>
                <input 
                name="email" 
                value={this.state.email} 
                placeholder="email" 
                onChange={this.handleChange}/>
                <input 
                name="password" 
                value={this.state.password} 
                placeholder="password" 
                onChange={this.handleChange}/>
            </form>
        )
    }
}