import React, { useCallback, useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Card } from './Card'; 
import { Navigation } from './Navigation'; 
import type { Car } from '../../types'
import { NextPage } from 'next';
import Image from 'next/image'; 
import NextButton from '../../docs/chevron-circled.svg'

const Carousel: NextPage<{ carsList: Car[] }> = ({ carsList }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        containScroll: "trimSnaps",
      });
    
    const [selectedIndex, setSelectedIndex] = useState(0);
    const scrollPrev = useCallback(() => {    if (emblaApi) emblaApi.scrollPrev()  }, [emblaApi])
    const scrollNext = useCallback(() => {    if (emblaApi) emblaApi.scrollNext()  }, [emblaApi])

    const scrollTo = useCallback(
        (index: number) => {
          emblaApi && emblaApi.scrollTo(index);
        },
        [emblaApi]
      );

      const onSelect = useCallback(() => {
        emblaApi && setSelectedIndex(emblaApi.selectedScrollSnap());
      }, [setSelectedIndex, emblaApi]);
    
      useEffect(() => {
        onSelect();
        emblaApi && emblaApi.on("select", onSelect);
      }, [emblaApi, setSelectedIndex, onSelect]);

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
        <Navigation 
                selectedIndex={selectedIndex}
                scrollTo={scrollTo}
                scrollPrev={scrollPrev}
                scrollNext={scrollNext}
                carsList={carsList} 
        />
    </div>
           
    )
}

export default Carousel; 
