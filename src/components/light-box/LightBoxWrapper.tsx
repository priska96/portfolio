import React from 'react';
import FsLightbox from "fslightbox-react";
import type {ProjectDetailData} from '../../pages/projects/project-data';

interface LightBoxWrapperProps {
    srcIndex: number;
    isOpen: boolean;
    card: ProjectDetailData;
    handleClose: () => void;
}

export default function LightBoxWrapper(props: LightBoxWrapperProps)  {

    const [currentImageIndex, setCurrentImageIndex] = React.useState(props.srcIndex ?? 0);
    const [images, setImages] = React.useState<string[]>([])
    const [toggler,setToggler] = React.useState(false)

    React.useEffect(()=>{
        setCurrentImageIndex(props.srcIndex);
    },[props.srcIndex])

    React.useEffect(()=>{
        setToggler(props.isOpen);
    },[props.isOpen])

    React.useEffect(()=>{
        if(props.card.imgs && props.card.imgs.length > 0) setImages(props.card.imgs);
    },[props.card])


    return (
        <FsLightbox
        toggler={toggler}
        sources={images}
        sourceIndex={currentImageIndex}
        onClose={()=>{setToggler(false);props.handleClose()}}
    />
    );
};
