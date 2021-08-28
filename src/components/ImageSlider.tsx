import React from "react";

interface Props {};

interface State {
    sliderData : {
        images: string[];
        index: number
    }
};

export default class ImageSlider extends React.Component<Props, State> {
    constructor(props : Props) {
        super(props);

        this.state = {
            sliderData : {
                images: [
                "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
                "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9",
                "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
                "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6082931ef598a85b055afe77%2F0x0.jpg%3FcropX1%3D0%26cropX2%3D3475%26cropY1%3D182%26cropY2%3D2137"
                ],
                index: 0
            }
        }
    }

    handleNext = () => {
        var sliderDataObject = {...this.state.sliderData};
        sliderDataObject.index++;
        this.setState(
            { sliderData : sliderDataObject }
        );
    }

    render = () => {
        const styleObject : { width: string } = {
            width: "400px"
        }

        return(
            <div>
                <img 
                style={styleObject}
                src={this.state.sliderData.images[this.state.sliderData.index]}/>
            <button onClick={this.handleNext}>next</button>
            </div>
        )
    }
}