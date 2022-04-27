import React from "react";
import { FcNext } from 'react-icons/fc';
import Image from 'next/image'
import type { Car } from '../../types'
import Link from 'next/link'

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
        <Link href={`/learn/${id}`}>
            <a>
            <p>LEARN</p>

            </a>
            {/* <FcNext className="link-icon"/> */}
        </Link>
        {/* <Link className="links-shop">
            SHOP
            {/* <FcNext className="link-icon"/> */}
        {/* </Link> */}
        </div>
      </div>
  );
};
