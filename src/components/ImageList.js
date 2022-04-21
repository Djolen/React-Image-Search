import React from 'react';  
import './Images.css';

const  ImageList = (props)=> { 
    const images = props.images.map((image) => {
        return <img key={image.id} src={image.webformatURL} className="myImageClass" alt="" />
    })
    return( 
            <div >
                {images}
            </div>            
   
    )
} 

export default ImageList