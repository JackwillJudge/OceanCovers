import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const ImageSlider = (props) => {

    const [current, setCurrent] = useState(0);
    const length = props.images.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      };
    
      const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
      };

  return (
    <div className="slider">
        <FontAwesomeIcon className='left-arrow' icon={faArrowLeft} onClick={prevSlide}/>
        <FontAwesomeIcon className='right-arrow' icon={faArrowRight} onClick={nextSlide}/>
        {props.images.map((slide, index) => {
        return (
          <div
            className={index === current ? 'image active' : 'image'}
            key={index}
          >
            {index === current && (
              <img src={slide.original} alt='covers' className='slider-image ' />
            )}
          </div>
        );
      })}

    </div>
  )
}

export default ImageSlider
