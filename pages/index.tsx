import cars from '../public/api/cars.json'
import React from "react";
import { NextPage, GetStaticProps } from "next";
import type { Car } from '../types';
import Carousel from "../src/components/Carousel"

// make sure to use good HTMl (add a Head element from Next)

const HomePage: NextPage<{ cars: Car[] }> = ({ cars }) => {
    return (
    <React.StrictMode>
      <Carousel carsList={cars} />
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