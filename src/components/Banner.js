import React from "react";
import { Banner } from "../styles/HeaderStyles";
import ImagemBanner from "../assets/imgs/ImagemBanner.png";

const BannerComponent = () => {
  return (
    <div>
      <Banner src={ImagemBanner} alt="Capa do blog" />
    </div>
  );
};

export default BannerComponent;
