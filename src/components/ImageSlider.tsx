import React from "react";

interface Props {};

interface State {
    sliderData: {
        images: string[];
        index: number
        },
    isVisible: boolean
};

export default class ImageSlider extends React.Component<Props, State> {
    
    state = {
        sliderData : {
            images: [
            "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
            "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9",
            "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
            "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6082931ef598a85b055afe77%2F0x0.jpg%3FcropX1%3D0%26cropX2%3D3475%26cropY1%3D182%26cropY2%3D2137"
            ],
            index: 0
        },
        isVisible : false
    }

    handleNext = ( sign : string) => {
        let sliderDataObject = this.state.sliderData;
        let n = sliderDataObject.images.length - 1;

        if (sign ==="+") {
            if(sliderDataObject.index===n) {
                sliderDataObject.index = sliderDataObject.index - n;
            } else {
                sliderDataObject.index ++;
            }
        } else if (sign === "-" && sliderDataObject.index ===0) {
            sliderDataObject.index = n;
        } else {
            sliderDataObject.index--;
        }

        this.setState(
            { sliderData : sliderDataObject }
        );
    }

    toggleIsVisible = () => {
        const isVisible = this.state;
        this.setState(
            { isVisible : !isVisible }
        );
    }

    render(){
        const styleObject: {
            width:string , height:string, "object-fit":string
        } = {
            width: "400px",
            height: "220px",
            "object-fit": "cover"
        }

        if(this.state.isVisible){
            return(
                <div>
                    <img 
                    style={ styleObject }
                    src={ this.state.sliderData.images[this.state.sliderData.index] }/>
                    <button className="btn btn-light" onClick={()=>this.handleNext("-")}>previous</button>
                    <button className="btn btn-dark" onClick={()=>this.handleNext("+")}>next</button>
                </div>
            )
        } else {
            return(
            <>
            <button className="btn btn-dark" onClick={this.toggleIsVisible}>show img slider</button>
            </>
        )}
    }
}