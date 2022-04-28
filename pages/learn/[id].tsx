import { NextPage } from "next";
import cars from "../../public/api/cars.json";
import type { Car } from "../../types";
import { Card } from "../../src/components/Card";

const Learn: NextPage<{carInfo: Car}> = ({ carInfo }) => {
  return (
    <div>
      <Card
        id={carInfo.id}
        modelName={carInfo.modelName}
        modelType={carInfo.modelType}
        bodyType={carInfo.bodyType}
        imageUrl={carInfo.imageUrl}
      />
    </div>
  );
};

export const getStaticPaths = () => {
  return {
    paths: cars.map((car) => {
      return {
        params: { id: String(car.id) },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = ({ params }: { params: { id: string } }) => {
  const carInfo = cars.find((car) => car.id === params.id);
  return {
    props: {
      carInfo,
    },
  };
};

export default Learn;
