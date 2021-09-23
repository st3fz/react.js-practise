import React, { useEffect, useState } from "react";
import { DisplayPhotos } from "../../../assets/DisplayPhotos/DisplayPhotos";
import { FaAngleDoubleRight, FaAngleDoubleLeft} from 'react-icons/fa';
import OutsideClickHandler from 'react-outside-click-handler';

import "./DisplayPhoto.css";

interface Props {
    setDisplayPhoto: React.Dispatch<React.SetStateAction<{data: string, componentRef: React.RefObject<HTMLDivElement>}>>;
    displayPhoto: {data: string, componentRef:React.RefObject<HTMLDivElement>};
}

const DisplayPhoto : React.FC<Props> = ( props : Props ) => {

    var photoData = {...props.displayPhoto}; 

    useEffect(() => {
        props.setDisplayPhoto(photoData);
    }, [photoData])
    
    const [ imageSliderData , setImageSliderData ] = useState<{images : Array<string>, index : number}>(
        {
            images: DisplayPhotos,
            index: 0
        });
        
    const [ isComponentVisible, setIsComponentVisible ] = useState<boolean>(false);
    const [ isPhotoSelected , setIsPhotoSelected ] = useState<boolean>(false);
    
    const imageRef = React.useRef<HTMLImageElement>(null);

    const toggleSliderImages = (sign: string) => {
        var imagesData = {...imageSliderData};
        var n = imagesData.images.length - 1;
        switch(sign) {
            case "+":
                imagesData.index===n ? imagesData.index = imagesData.index - n : imagesData.index ++;
                break;
            case "-":
                imagesData.index===0 ? imagesData.index = n : imagesData.index--;
                break;
        }
        setImageSliderData(imagesData);
        toggleSelection(!isPhotoSelected);
    }

    const toggleSelection = ( isPhotoSelected:boolean ) => {
        if(isPhotoSelected) unselectProfilePhoto();
        else selectProfilePhoto();
    }
    
    const selectProfilePhoto = () => {
        imageRef.current?.classList.add('image-border');
        setIsPhotoSelected(true);
        photoData.data = imageSliderData.images[imageSliderData.index];
    }

    const unselectProfilePhoto = () => {
        imageRef.current?.classList.remove('image-border');
        setIsPhotoSelected(false);
        photoData.data = "";
    }

    const imageSlider = (
        <div>
            <button className="btn btn-light rounded-circle" onClick={()=>toggleSliderImages("-")}>
                <FaAngleDoubleLeft/>
            </button>
            <img id="display-photos" ref={imageRef}
            src={ isPhotoSelected ? photoData.data : imageSliderData.images[imageSliderData.index]}
            alt="images" onClick={()=>toggleSelection(isPhotoSelected)}/>
            <button className="btn btn-light rounded-circle" 
            onClick={()=>toggleSliderImages("+")}>
                <FaAngleDoubleRight/>
            </button>
        </div>
    );

    const showButton = (
        <button className="btn btn-dark" onClick={()=>setIsComponentVisible(!isComponentVisible)}>
            <span>Select Display Photo</span>
        </button>
    );
        
    return(
        <>
            <OutsideClickHandler onOutsideClick={()=>{
                setIsComponentVisible(false);
            }}>
                { isComponentVisible ? imageSlider : showButton }
            </OutsideClickHandler>
        </>
    )
    
}

export default DisplayPhoto;