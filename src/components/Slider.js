import { useEffect, useState, useRef } from "react";
import '../Slider.css'
import {AiOutlineVerticalRight, AiOutlineVerticalLeft} from 'react-icons/ai'

const featuredProducts = [
  'https://static.miscota.com/media/1/banners/banner_1659085051_ciyhyvxT.jpg',
  'https://static.miscota.com/media/1/banners/banner_1659085051_ciVBJpwG.jpg',
  'https://static.miscota.com/media/1/banners/banner_1659085048_ciqj3VFJ.jpg',
  'https://static.miscota.com/media/1/banners/banner_1659085051_ciVBJpwG.jpg',
];


let count = 0;
let slideInterval


export default function Slider() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = ()=> {
    slideRef.current.classList.remove('fade-anim')
  };

  useEffect(() => {
    slideRef.current.addEventListener
    ('animationend', removeAnimation);
    slideRef.current.addEventListener
    ('mouseenter', pauseSlider);
    slideRef.current.addEventListener
    ('mouseleave', startSlider);
    startSlider();
    return () => {
      pauseSlider();
    }
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick()
    }, 3000);
  };
  
  const pauseSlider = () => {
    clearInterval(slideInterval)
  }
  
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count)
    slideRef.current.classList.add('fade-anim')
  }
  
  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count)
    slideRef.current.classList.add('fade-anim')
  };

  

  return (
  <div ref={slideRef} className='container'>
    <div className="container-image">
    <img className="image-carousel" src={featuredProducts[currentIndex]} alt="locura" />
    </div>
    
    <div className='container-button'>
      <button className='model-button' onClick={handleOnPrevClick }> 
      <AiOutlineVerticalRight className="button-right"/>
      </button>
      <button className='model-button'  onClick={handleOnNextClick}>
      <AiOutlineVerticalLeft className="button-left"/>
      </button>
    </div>
  </div>
  );
}