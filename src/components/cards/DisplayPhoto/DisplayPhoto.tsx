import React, { createRef, useEffect, useState } from "react";
import "./DisplayPhoto.css";

import { DisplayPhotoData } from "../../../assets/DisplayPhotoData/DisplayPhotoData";

import { FaAngleDoubleRight, FaAngleDoubleLeft} from 'react-icons/fa';

const DisplayPhoto : React.FC = () => {
    const [ isVisible, setIsVisible ] = useState<boolean>(false);
    
    const [ imageSliderData , setImageSliderData ] = useState<{images : Array<string>, index : number}>(
        {
            images: DisplayPhotoData,
            index: 0
        });

    const [ selectedImage , setSelectedImage ] = useState<string>("");

    const [ isSelected , setisSelected ] = useState<boolean>(false);

    const toggleIsVisible = () => {
        setIsVisible(!isVisible);;
    }

    const imageRef = React.useRef<HTMLImageElement>(null);
    
    const toggleSliderImages = (sign: string) => {
        var n = imageSliderData.images.length - 1;
        var imagesData = {...imageSliderData};
        switch(sign) {
            case "+":
                if(imagesData.index===n) imagesData.index = imagesData.index - n;
                else imagesData.index ++;
                break;
            case "-":
                if (imagesData.index ===0) imagesData.index = n;
                else imagesData.index--;
                break;
        }
        setImageSliderData(imagesData);
    }

    const toggleSelectImage = () => {
        imageRef.current?.classList.add('image-border');
        setisSelected(!isSelected);
        if (isSelected && imageRef.current?.src !== undefined) setSelectedImage(imageRef.current?.src);
    }

    const imageSlider = (
        <div>
            <button className="btn btn-light rounded-circle" onClick={()=>toggleSliderImages("-")}>
                <FaAngleDoubleLeft/>
            </button>
            <img id="display-photos" ref={imageRef}
            src={imageSliderData.images[imageSliderData.index]}
            alt="images" onClick={()=>toggleSelectImage()}/>
            <button className="btn btn-light rounded-circle" 
            onClick={()=>toggleSliderImages("+")}>
                <FaAngleDoubleRight/>
            </button>
        </div>
    );
        
    return(
        <>
            {isVisible ? imageSlider : null}
            {isVisible ? null : 
            <button className="btn btn-dark" onClick={toggleIsVisible.bind(this)}>
                <span>Select Display Photo</span>
            </button>}
        </>
    )
    
}

export default DisplayPhoto;