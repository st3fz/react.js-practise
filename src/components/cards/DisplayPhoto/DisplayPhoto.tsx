import React, { createRef, useEffect, useState } from "react";
import "./DisplayPhoto.css";
import { DisplayPhotos } from "../../../assets/DisplayPhotos/DisplayPhotos";
import { FaAngleDoubleRight, FaAngleDoubleLeft} from 'react-icons/fa';

interface Props {
    setDisplayPhoto: React.Dispatch<React.SetStateAction<string>>;
    displayPhoto: string;
}

const DisplayPhoto : React.FC<Props> = ( props : Props ) => {
    const [ isVisible, setIsVisible ] = useState<boolean>(false);
    const [ imageSliderData , setImageSliderData ] = useState<{images : Array<string>, index : number}>(
        {
            images: DisplayPhotos,
            index: 0
        });
    const [ isPhotoSelected , setIsPhotoSelected ] = useState<boolean>(false);
    
    const imageRef = React.useRef<HTMLImageElement>(null);

    const toggleSliderImages = (sign: string) => {
        var imagesData = {...imageSliderData};
        var n = imagesData.images.length - 1;
        switch(sign) {
            case "+":
                if(imagesData.index===n) imagesData.index = imagesData.index - n;
                else imagesData.index ++;
                break;
            case "-":
                if (imagesData.index===0) imagesData.index = n;
                else imagesData.index--;
                break;
        }
        setImageSliderData(imagesData);
        toggleSelection(!isPhotoSelected);
    }

    const toggleSelection = ( isPhotoSelected:boolean ) => {
        if(isPhotoSelected) unselectProfilePhoto();
        else selectProfilePhoto();
    }
    
    const selectProfilePhoto = ( ) => {
        imageRef.current?.classList.add('image-border');
        setIsPhotoSelected(true);
        props.setDisplayPhoto(imageSliderData.images[imageSliderData.index]);
    }

    const unselectProfilePhoto = () => {
        imageRef.current?.classList.remove('image-border');
        setIsPhotoSelected(false);
        props.setDisplayPhoto("");
    }

    const imageSlider = (
        <div>
            <button className="btn btn-light rounded-circle" onClick={()=>toggleSliderImages("-")}>
                <FaAngleDoubleLeft/>
            </button>
            <img id="display-photos" ref={imageRef}
            src={ isPhotoSelected ? props.displayPhoto : imageSliderData.images[imageSliderData.index]}
            alt="images" onClick={()=>toggleSelection(isPhotoSelected)}/>
            <button className="btn btn-light rounded-circle" 
            onClick={()=>toggleSliderImages("+")}>
                <FaAngleDoubleRight/>
            </button>
        </div>
    );
        
    return(
        <>
            {isVisible ? imageSlider : 
            <button className="btn btn-dark" onClick={()=>setIsVisible(!isVisible)}>
                <span>Select Display Photo</span>
            </button>}
        </>
    )
    
}

export default DisplayPhoto;