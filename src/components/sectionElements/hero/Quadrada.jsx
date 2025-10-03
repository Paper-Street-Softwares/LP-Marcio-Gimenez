import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import content from "../../../content/content";
import Button from "../../interactives/Button";
import { FaWhatsapp } from "react-icons/fa";
import "../../../styles/shapeDivs.css";
import ImageGallery from "react-image-gallery";
import heroImg1 from "../../../assets/imgs/hero/imgHero2.webp";
import heroImg2 from "../../../assets/imgs/hero/imgHero3.webp";
import heroImg3 from "../../../assets/imgs/hero/imgHero4.webp";
import heroImg4 from "../../../assets/imgs/hero/imgHero5.webp";
import heroImg5 from "../../../assets/imgs/hero/imgHero6.webp";
import React, { useState } from "react";

export default function Quadrada({ appDownloadButtons, colorMode }) {
  // Definindo cores de fundo com base no tema
  const backgroundClasses = {
    dark: "bg-bgFixedDark",
    light: "bg-bgFixedLight",
    default: "from-bgSectionDark to-darker",
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      original: heroImg1,
    },
    {
      original: heroImg2,
    },
    {
      original: heroImg3,
    },
    {
      original: heroImg4,
    },
    {
      original: heroImg5,
    },
  ];

  const captions = [
    "Segurança Jurídica construída com experiência e técnica",
    "O mundo corporativo exige conhecimento e estratégia para sustentar grandes negócios",
    "Com 14 anos de experiência no setor público, o escritório alinha conhecimento jurídico e experiência administrativa",
    "A solidez de um empreendimento nasce do rigor jurídico que o ampara",
    "Soluções jurídicas que atravessam fronteiras",
  ];

  const bgGradient = backgroundClasses[colorMode] || backgroundClasses.default;
  const titleColor = colorMode === "light" ? "text-black" : "text-white";
  const subtitleColor = colorMode === "light" ? "text-black" : "text-white";
  const obsTextColor = colorMode === "light" ? "text-black" : "text-white";
  const descriptionColor = colorMode === "light" ? "text-black" : "text-white";

  return (
    <div
      className={`w-full bg-center bg-repeat font-mainFont bg-gradient-to-b ${bgGradient}`}
      id="home"
    >
      <div className="relative z-10 flex w-full items-left">
        <div className="w-full text-secondary justify-evenly">
          <div className="h-[125px] phone2:h-[125px] phone3:h-[140px] tablet1:h-[150px] desktop1:h-[110px] desktop3:h-[120px] " />{" "}
          <div className="flex desktop1:justify-between mx-auto items-center ">
            {/* Imagem principal */}
            <div className="flex justify-center w-full relative">
              {/* Carrossel */}
              <div className="w-full h-full">
                <ImageGallery
                  items={images}
                  showNav={false}
                  showFullscreenButton={false}
                  onSlide={(index) => setCurrentIndex(index)}
                  useBrowserFullscreen={false}
                  showBullets={false}
                  showPlayButton={false}
                  showThumbnails={false}
                  autoPlay={true}
                  slideInterval={5000}
                  additionalClass="custom-gallery"
                />
                <style>
                  {`
        .custom-gallery .image-gallery-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .custom-gallery .image-gallery-thumbnails {
          display: none;
        }
      `}
                </style>
                <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
              </div>

              {/* Texto sobreposto */}
              <MotionDivDownToUp className="absolute inset-0 flex items-center justify-center z-10">
                <div
                  className={`font-bold leading-[40px] phone3:leading-[42px] tablet1:leading-[70px] desktop1:leading-[60px] desktop2:leading-[65px] text-center desktop1:text-left text-title4 phone2:text-title5 phone3:text-title5 tablet1:text-title6 ${titleColor}`}
                >
                  <h1 className="flex text-center text-paragraph5 tablet1:text-title4 leading-6 tablet1:leading-8 desktop1:text-title7 desktop1:leading-[60px] w-[90%] m-auto">
                    {captions[currentIndex]}
                  </h1>
                </div>
              </MotionDivDownToUp>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
