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

export default function Quadrada({ appDownloadButtons, colorMode }) {
  // Definindo cores de fundo com base no tema
  const backgroundClasses = {
    dark: "bg-bgFixedDark",
    light: "bg-bgFixedLight",
    default: "from-bgSectionDark to-darker",
  };

  const bgGradient = backgroundClasses[colorMode] || backgroundClasses.default;
  const titleColor = colorMode === "light" ? "text-black" : "text-white";
  const subtitleColor = colorMode === "light" ? "text-black" : "text-white";
  const obsTextColor = colorMode === "light" ? "text-black" : "text-white";
  const descriptionColor = colorMode === "light" ? "text-black" : "text-white";

  const images = [
    {
      original: heroImg1,
      thumbnail: heroImg1,
    },
    {
      original: heroImg2,
      thumbnail: heroImg2,
    },
    {
      original: heroImg3,
      thumbnail: heroImg3,
    },
    {
      original: heroImg4,
      thumbnail: heroImg4,
    },
    {
      original: heroImg5,
      thumbnail: heroImg5,
    },
  ];

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
                  useBrowserFullscreen={false}
                  showBullets={false}
                  showPlayButton={false}
                  showThumbnails={false}
                  autoPlay={true}
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
              </div>

              {/* Texto sobreposto */}
              {/* <MotionDivDownToUp className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`font-bold leading-[40px] phone3:leading-[42px] tablet1:leading-[70px] desktop1:leading-[60px] desktop2:leading-[65px] text-center desktop1:text-left text-title4 phone2:text-title5 phone3:text-title5 tablet1:text-title6 ${titleColor}`}
                >
                  <h1>{content.texts.hero.title}</h1>
                </div>
              </MotionDivDownToUp> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
