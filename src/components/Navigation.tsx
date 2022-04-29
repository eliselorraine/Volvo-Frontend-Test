import { useEffect, useState } from "react";
import type { NavigationProps } from "../../types";
import Image from "next/image";
import NextButton from "../../docs/chevron-circled.svg";

export const Navigation: React.FC<NavigationProps> = ({
  carsList,
  selectedIndex,
  scrollTo,
  scrollPrev,
  scrollNext,
}: NavigationProps) => {
  const [width, setWidth] = useState(501);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width > 500) {
    return (
      <div className="button-wrapper">
        <button className="button" onClick={scrollPrev}>
          <Image className="back-button" src={NextButton} alt="back button" />
        </button>
        <button className="button" onClick={scrollNext}>
          <Image className="next-button" src={NextButton} alt="next button" />
        </button>
      </div>
    );
  }
  return (
    <div className="dots">
      {carsList.map((car, i: number) => {
        return (
          <button
            key={car.id}
            className={i === selectedIndex ? "dot active" : "dot"}
            onClick={() => scrollTo(i)}
          ></button>
        );
      })}
    </div>
  );
};
