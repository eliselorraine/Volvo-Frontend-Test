import React, { useCallback } from 'react'; 
import useEmblaCarousel from 'embla-carousel-react';
import { Card } from './Card'; 
import type { Car } from '../../types'
import { NextPage } from 'next';
import Image from 'next/image'; 
import NextButton from '../../docs/chevron-circled.svg'

const Carousel: NextPage<{ carsList: Car[] }> = ({ carsList }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(); 

    const scrollPrev = useCallback(() => {    if (emblaApi) emblaApi.scrollPrev()  }, [emblaApi])
    const scrollNext = useCallback(() => {    if (emblaApi) emblaApi.scrollNext()  }, [emblaApi])

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
            <button className="button" onClick={scrollPrev}><Image className="back-button" src={NextButton} alt='back button' /></button>
            <button className="button" onClick={scrollNext}><Image className="next-button" src={NextButton} alt='next button' /></button>
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
