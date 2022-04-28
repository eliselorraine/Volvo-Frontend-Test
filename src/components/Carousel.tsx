import React, { useRef, useEffect } from 'react'; 
import useEmblaCarousel from 'embla-carousel-react/components';
import { Card } from './Card'; 
import type { Car } from '../../types'
import { NextPage } from 'next';
import Image from 'next/image'; 
import NextButton from '../../docs/chevron-circled.svg'

const Carousel: NextPage<{ carsList: Car[] }> = ({ carsList }) => {
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

    return (
    <div className="carousel">
        <div className="carousel-wrapper">
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
            <button className="button" onClick={backButtonClick}><Image className="back-button" src={NextButton} alt='back button' /></button>
            <button className="button" onClick={nextButtonClick}><Image className="next-button" src={NextButton} alt='next button' /></button>
        </div>
    </div>
    )
}

export default Carousel; 