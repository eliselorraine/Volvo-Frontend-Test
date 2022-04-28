import React from "react";
import { FcNext } from 'react-icons/fc';
import Image from 'next/image'
import type { Car } from '../../types'
import Link from 'next/link'
import { Text, Block } from 'vcc-ui';
import Arrow from '../../docs/chevron-small.svg'


export const Card: React.FC<Car> = ({ id, modelName, modelType, imageUrl, bodyType }: Car) => { 
    return (
        <li className="card">
        <Text 
            className="body-type"
            variant="kelly"
            subStyle="emphasis"
            extend={{ color: "#707070", textTransform: 'uppercase'}}
        >{bodyType}</Text>
        <div className="model-details">
            <Text 
                className="model-name"
                variant="columbus"
                subStyle="emphasis"
                extend={{ color: "#141414" }}
            >{modelName}</Text>
            <Text 
                className="model-type"
                variant="columbus"
                extend={{ color: "#707070"}}
            >{modelType}</Text>
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
            <a className="link">
                <Text 
                    className="link-text"
                    variant="kelly"
                    subStyle="emphasis"
                    extend={{ color: "#1c6bba", display: "flex", alignItems: 'center'  }}
                >LEARN</Text>
                <Image src={Arrow} alt='arrow icon' />
            </a>
        </Link>
        <Link href={`/shop/${id}`}>
            <a className="link">
                <Text 
                    className="link-text"
                    variant="kelly"
                    subStyle="emphasis"
                    extend={{ color: "#1c6bba", display: "flex", alignItems: 'center'  }}
                >SHOP</Text>
                <Image src={Arrow} alt='arrow icon' className="link-icon" />
            </a>
        </Link>
        </div>
      </li>
  );
};
