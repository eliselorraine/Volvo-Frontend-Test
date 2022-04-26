import { HelloWorld } from "../src/components/HelloWorld";
import "../public/css/styles.css";
import React from "react";
import { ProductTitle } from "../src/components/ProductTitle";

function HomePage() {
  return (
    <React.StrictMode>
      <ProductTitle />
    </React.StrictMode>
  );
}

export default HomePage;
