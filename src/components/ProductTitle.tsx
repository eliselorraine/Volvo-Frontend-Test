import React from "react";
import { FcNext } from 'react-icons/fc';

export const ProductTitle: React.FC = () => {
  return (
      <>
        <p className="body-type">SUV</p>
        <div className="model-details">
            <p className="model-name">XC60 Recharge</p>
            <p className="model-type">plug-in hybrid</p>
        </div>
        <img className="model-image" src="/images/xc60_recharge.jpg" alt="product image"></img>
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
      </>
  );
};