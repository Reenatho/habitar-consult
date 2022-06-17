import React from "react";
import './slider.css';
import ImageGallery from 'react-image-gallery';

import IMG1 from '../../assets/habitar-jpg/Slide1.JPG'
// import IMG2 from '../../assets/habitar-jpg/Slide2.JPG'
import IMG3 from '../../assets/habitar-jpg/Slide3.JPG'
import IMG4 from '../../assets/habitar-jpg/Slide4.JPG'
import IMG5 from '../../assets/habitar-jpg/Slide5.JPG'
import IMG6 from '../../assets/habitar-jpg/Slide6.JPG'
import IMG7 from '../../assets/habitar-jpg/Slide7.JPG'
import IMG8 from '../../assets/habitar-jpg/Slide8.JPG'
// import IMG9 from '../../assets/habitar-jpg/Slide9.JPG'
import IMG10 from '../../assets/habitar-jpg/Slide10.JPG'
import IMG11 from '../../assets/habitar-jpg/Slide11.JPG'
import IMG12 from '../../assets/habitar-jpg/Slide12.JPG'


const images = [
    {
      original: IMG1,
    //   thumbnail: 'fora de uso',
    },
    // {
    //   original: IMG2,
    // },
    {
      original: IMG3,
    },
    {
      original: IMG4,
    },
    {
      original: IMG5,
    },
    {
      original: IMG6,
    },
    {
      original: IMG7,
    },
    {
      original: IMG8,
    },
    // {
    //   original: IMG9,
    // },
    {
      original: IMG10,
    },
    {
      original: IMG11,
    },
    {
      original: IMG12,
    },
    
  ];

const Slider = () => {
    return(
        <section id="slider">
            <h4>Fotos</h4>
            <h2>Disponíveis</h2>

            <div className="slide-container">
                <ImageGallery items={images}
                    originalWidth='50%'
                    originalHeight='50%'
                />
            </div>
        </section>
    )
}

export default Slider;