import cars from "../public/api/cars.json";
import React from "react";
import { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import type { Car } from "../types";
import Carousel from "../src/components/Carousel";

const HomePage: NextPage<{ cars: Car[] }> = ({ cars }) => {
  return (
    <React.StrictMode>
      <Head>
        <title>Volvo Frontend Code Test</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          lang="en"
        />
      </Head>
      <Carousel carsList={cars} />
    </React.StrictMode>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      cars,
    },
  };
};
