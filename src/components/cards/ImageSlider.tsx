import React from "react";

interface Props {};

interface State {
    sliderImageData: {
        images: string[];
        index: number
        },
    isVisible: boolean
};

export default class ImageSlider extends React.Component<Props, State> {
    
    constructor(props: Props){
        super(props);
        this.state = {
            sliderImageData : {
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
        this.toggleIsVisible = this.toggleIsVisible.bind(this);
    }

    handleNext = (sign: string) => {
        var sliderDataObject = this.state.sliderImageData;
        var n = sliderDataObject.images.length - 1;

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
            { sliderImageData : sliderDataObject }
        );
    }

    toggleIsVisible = () => {
        this.setState(
            { isVisible : !this.state.isVisible }
        );
    }

    render(){
        const styleObject: {
            width:string , height:string, "object-fit":string
        } = {
            width: "350px",
            height: "220px",
            "object-fit": "cover"
        }

        const imageSlider = (
            <div>
                <button className="btn btn-light" onClick={()=>this.handleNext("-")}>previous</button>
                <img 
                style={styleObject}
                src={this.state.sliderImageData.images[this.state.sliderImageData.index]}
                alt="picture of cat"/>
                <button className="btn btn-dark" onClick={()=>this.handleNext("+")}>next</button>
            </div>
        );

        const toggleButton = (
            <button 
                className={`btn ${this.state.isVisible ? 'btn-light' : 'btn-dark'}`} 
                onClick={this.toggleIsVisible.bind(this)}>
                {this.state.isVisible 
                ? <span>hide </span> 
                : <span>show </span>}
                img slider
            </button>
        );

        return(
            <>
                {this.state.isVisible ? imageSlider : null}
                {toggleButton}
            </>
        )
    }
}