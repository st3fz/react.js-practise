import React from "react";

import { FaAngleDoubleRight, FaAngleDoubleLeft} from 'react-icons/fa';

interface Props {};

interface State {
    sliderImageData: {
        images: string[];
        index: number
        },
    isVisible: boolean
};

export default class DisplayPicture extends React.Component<Props, State> {
    
    private imageRef: React.RefObject<HTMLInputElement>;
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
        this.imageRef = React.createRef();
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

    addBorder = () => {
        console.log(this.imageRef);
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
                <button className="btn btn-light rounded-circle" onClick={()=>this.handleNext("-")}><FaAngleDoubleLeft/></button>
                <img 
                style={styleObject}
                src={this.state.sliderImageData.images[this.state.sliderImageData.index]}
                alt="images"
                // ref={this.imageRef}
                onClick={()=>this.addBorder()}/>
                <button className="btn btn-light rounded-circle" onClick={()=>this.handleNext("+")}><FaAngleDoubleRight/></button>
            </div>
        );

        return(
            <>
                {this.state.isVisible ? imageSlider : null}
                {this.state.isVisible ? null : 
                <button className="btn btn-light" onClick={this.toggleIsVisible.bind(this)}>
                    <span>Select Display Photo</span>
                </button>}
            </>
        )
    }
}