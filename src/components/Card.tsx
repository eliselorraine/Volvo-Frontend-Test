import React from "react";
import { FcNext } from 'react-icons/fc';
import Image from 'next/image'
import type { Car } from '../../types'

export const Card: React.FC<Car> = ({ id, modelName, modelType, imageUrl, bodyType }: Car) => { 
    return (
        <div className="card">
        <p className="body-type">{bodyType}</p>
        <div className="model-details">
            <p className="model-name">{modelName}</p>
            <p className="model-type">{modelType}</p>
        </div>
        <Image 
            className="model-image" 
            src={imageUrl} 
            alt="product image" 
            width="300" 
            height="200"
        />
        <div className="links">
        <a className="links-learn">
            <p>LEARN</p>
            <FcNext className="link-icon"/>
        </a>
        <a className="links-shop">
            <p>SHOP</p>
            <FcNext className="link-icon"/>
        </a>
        </div>
      </div>
  );
};
