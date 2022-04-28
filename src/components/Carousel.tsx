import React, { useRef, useEffect } from 'react'; 
import useEmblaCarousel from 'embla-carousel-react';
import { Card } from './Card'; 
import type { Car } from '../../types'
import { NextPage } from 'next';
import Image from 'next/image'; 
import NextButton from '../../docs/chevron-circled.svg'

const Carousel: NextPage<{ carsList: Car[] }> = ({ carsList }) => {
    const [emblaRef] = useEmblaCarousel(); 
    
    return (
        <div className="carousel">
        <div className="carousel-wrapper" ref={emblaRef}>
            <ul className="carousel-list">
            {carsList.map(car => {
                return <Card 
                key={car.id} 
                id={car.id} 
                modelName={car.modelName} 
                modelType={car.modelType} 
                bodyType={car.bodyType} 
                imageUrl={car.imageUrl}
                />
            })}
            </ul>
        </div>
        <div className="button-wrapper">
            <button className="button" onClick={() => console.log('back')}><Image className="back-button" src={NextButton} alt='back button' /></button>
            <button className="button" onClick={() => console.log('next')}><Image className="next-button" src={NextButton} alt='next button' /></button>
        </div>
    </div>
    )
}

// const carouselRef = useRef(null); 

// useEffect(() => {
    //     console.log(carouselRef)
    // }, [carouselRef])
    
    // const nextButtonClick = () => {
        //     if(carouselRef.current) {
            //         const scrollWidth = carouselRef.current.scrollWidth; 
            //         carouselRef.current.scrollBy({left: scrollWidth/carsList.length, behavior: 'smooth'})
            //     }
            //     return; 
            // }
            // const backButtonClick = () => {
                //     if(carouselRef.current) {
                    //         const scrollWidth = carouselRef.current.scrollWidth; 
//         carouselRef.current.scrollBy({left: -scrollWidth/carsList.length, behavior: 'smooth'})
//     }
//     return; 
// }
// ref={carouselRef} add this to the div
// const [emblaRef] = useEmblaCarousel(); 

export default Carousel; 

// const currentOffsetXRef = useRef(0); 
// const [offsetX, setOffsetX, offsetXRef] = useStateRef(0); 
// const startXRef = useRef(0); 

// const onTouchMove = (e: TouchEvent | MouseEvent) => {
//     const currentX = getTouchEventData(e).clientX; 
// }

// const onTouchEnd = () => {
//     window.removeEventListener('touchend', onTouchEnd);
//     window.removeEventListener('touchmove', onTouchMove);
//     window.removeEventListener('mouseup', onTouchEnd);
//     window.removeEventListener('mousemove', onTouchMove);
// }

// const onTouchStart = (e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
//     window.addEventListener('touchmove', onTouchMove);
//     window.addEventListener('touchend', onTouchEnd);
//     window.addEventListener('mousemove', onTouchMove);
//     window.addEventListener('mouseup', onTouchEnd);
// }

// const onMouseMove = (e: MouseEvent) => {
//     const currentX = e.clientX;
//     const diff = getRefValue(startXRef) - currentX;
//     const newOffsetX = getRefValue(currentOffsetXRef) - diff;

//     setOffsetX(newOffsetX);
// }

// const onMouseUp = () => {
//     window.removeEventListener('mouseup', onMouseUp);
//     window.removeEventListener('mousemove', onMouseMove);
// };

// const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
//     currentOffsetXRef.current = getRefValue(offsetXRef); 
//     startXRef.current = e.clientX; 

//     window.addEventListener('mousemove', onMouseMove); 
//     window.addEventListener('mouseup', onMouseUp); 
// }