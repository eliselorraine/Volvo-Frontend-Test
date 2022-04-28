import React from 'react'; 
import { Card } from './Card'; 
import type { Car } from '../../types'
import { NextPage } from 'next';
import Image from 'next/image'; 
import { IconButton } from 'vcc-ui'; 
import NextButton from '../../docs/chevron-circled.svg'

const Carousel: NextPage<{ carsList: Car[] }> = ({ carsList }) => {
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
            <Image className="button back-button" src={NextButton} alt='back button' />
            <Image className="button next-button" src={NextButton} alt='next button' />
        </div>
    </div>
    )
}

export default Carousel; 