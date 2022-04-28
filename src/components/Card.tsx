import React from "react";
import { FcNext } from 'react-icons/fc';
import Image from 'next/image'
import type { Car } from '../../types'
// import Link from 'next/link'
import { Text, Link, View } from 'vcc-ui';
// import Arrow from '../../docs/chevron-small.svg'


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
                extend={{ color: "#141414", paddingRight: 10 }}
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
        <View direction="row" justifyContent="center" spacing={2}>
            <Link href={`/learn/${id}`} arrow="right">LEARN</Link>
            <Link href={`/shop/${id}`} arrow="right">SHOP</Link>
        </View>
      </li>
  );
};
