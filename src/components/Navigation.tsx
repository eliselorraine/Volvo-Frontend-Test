import type { NavigationProps } from "../../types";
import Image from "next/image";
import NextButton from "../../docs/chevron-circled.svg";
import useWindowDimensions from "../hooks/windowDim";

export const Navigation: React.FC<NavigationProps> = ({
  carsList,
  selectedIndex,
  scrollTo,
  scrollPrev,
  scrollNext
}: NavigationProps) => {
  const dimensions = useWindowDimensions();
  const width = typeof dimensions === "undefined" ? 1 : dimensions.width;
  if (width <= 500) {
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
  } else if (width > 500) {
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
  return null; 
};
