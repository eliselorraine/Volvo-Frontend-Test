import { Card } from "../src/components/Card";
import cars from '../public/api/cars.json'
import React from "react";
import { NextPage, GetStaticProps } from "next";
import type { Car } from '../types';

// make sure to use good HTMl (add a Head element from Next)

const HomePage: NextPage<{ cars: Car[] }> = ({ cars }) => {
  return (
    <React.StrictMode>
      <div className="carousel">
        {cars.map(car => <Card key={car.id} id={car.id} modelName={car.modelName} modelType={car.modelType} bodyType={car.bodyType} imageUrl={car.imageUrl} />)}
      </div>
    </React.StrictMode>
  );
}

export default HomePage;


export const getStaticProps: GetStaticProps = (context) => {
    return {
        props: {
            cars,
        }
    }
}