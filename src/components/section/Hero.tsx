import React, { JSX } from "react";
import heroImage from "../../assets/heroImage.png";
import InfoButtons from "../buttons/InfoButtons";

export const Hero: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className="hero flex md:flex-row flex-col items-center justify-center space-x-20 my-20">
      <img src={heroImage} alt="" />
      <div className="font-extrabold   text-center md:text-left ">
        <h1 className="text-pink-400 text-6xl ">
          Take Your <br></br>Photobooth
        </h1>
        <p className="text-pink-300 text-2xl">
          Smile, Happy, Then you realize you are <br />
          Ryan Gosling.
        </p>
        <InfoButtons text="Try It!" />
      </div>
    </div>
  );
};

export default Hero;
