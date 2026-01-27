import MotionDivDownToUp from '../../animation/MotionDivDownToUp'
import content from '../../../content/content'
import Button from '../../interactives/Button'
import { FaWhatsapp } from 'react-icons/fa'
import '../../../styles/shapeDivs.css'
import ImageGallery from 'react-image-gallery'
import heroImg1 from '../../../assets/imgs/hero/imgHero1.webp'
import heroImg2 from '../../../assets/imgs/hero/imgHero2.webp'
import heroImg3 from '../../../assets/imgs/hero/imgHero3.webp'
import heroImg4 from '../../../assets/imgs/hero/imgHero4.webp'
import heroImg1Mobile from '../../../assets/imgs/hero/imgHero1Mobile.webp'
import heroImg2Mobile from '../../../assets/imgs/hero/imgHero2Mobile.webp'
import heroImg3Mobile from '../../../assets/imgs/hero/imgHero3Mobile.webp'
import heroImg4Mobile from '../../../assets/imgs/hero/imgHero4Mobile.webp'
// import heroImg5 from "../../../assets/imgs/hero/imgHero5.webp";
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Quadrada({ appDownloadButtons, colorMode }) {
  const backgroundClasses = {
    dark: 'bg-bgFixedDark',
    light: 'bg-bgFixedLight',
    default: 'from-bgSectionDark to-darker',
  }

  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    {
      desktop: heroImg1,
      mobile: heroImg1Mobile,
      originalAlt: 'Primeira ilustrativa',
    },
    {
      desktop: heroImg2,
      mobile: heroImg2Mobile,
      originalAlt: 'Segunda ilustrativa',
    },
    {
      desktop: heroImg3,
      mobile: heroImg3Mobile,
      originalAlt: 'Terceira ilustrativa',
    },
    {
      desktop: heroImg4,
      mobile: heroImg4Mobile,
      originalAlt: 'Quarta ilustrativa',
    },
  ]

  // const images = [
  //   {
  //     original: heroImg1,
  //     thumbnail: heroImg1,
  //     originalAlt: 'Primeira ilustrativa',
  //     thumbnailAlt: 'Primeira ilustrativa',
  //   },
  //   {
  //     original: heroImg2,
  //     thumbnail: heroImg2,
  //     originalAlt: 'Segunda ilustrativa',
  //     thumbnailAlt: 'Segunda ilustrativa',
  //   },
  //   {
  //     original: heroImg3,
  //     thumbnail: heroImg3,
  //     originalAlt: 'Terceira ilustrativa',
  //     thumbnailAlt: 'Terceira ilustrativa',
  //   },
  //   {
  //     original: heroImg4,
  //     thumbnail: heroImg4,
  //     originalAlt: 'Quarta ilustrativa',
  //     thumbnailAlt: 'Quarta ilustrativa',
  //   },
  //   // { original: heroImg5 },
  // ]

  const captions = [
    'Segurança Jurídica construída com experiência e técnica',
    'O mundo corporativo exige conhecimento e estratégia para sustentar grandes negócios',
    'Com 14 anos de experiência no setor público, o escritório alinha conhecimento jurídico e experiência administrativa',
    'A solidez de um empreendimento nasce do rigor jurídico que o ampara',
    'Soluções jurídicas que atravessam fronteiras',
  ]

  const bgGradient = backgroundClasses[colorMode] || backgroundClasses.default
  const titleColor = colorMode === 'light' ? 'text-black' : 'text-white'

  return (
    <div
      className={`w-full max-w-[1215px] m-auto bg-center bg-repeat font-mainFont bg-gradient-to-b ${bgGradient}`}
      id="home"
    >
      <div className="relative z-10 flex w-full items-left">
        <div className="w-full text-secondary justify-evenly">
          <div className="h-[125px] phone2:h-[125px] phone3:h-[140px] tablet1:h-[150px] desktop1:h-[110px] desktop3:h-[120px]" />

          <div className="flex desktop1:justify-between mx-auto items-center">
            {/* Imagem principal */}
            <div className="flex justify-center w-full relative overflow-hidden">
              <div className="w-full h-full relative">
                <ImageGallery
                  fetchpriority="high"
                  items={images}
                  showNav={false}
                  showFullscreenButton={false}
                  onSlide={(index) => setCurrentIndex(index)}
                  useBrowserFullscreen={false}
                  showBullets={false}
                  showPlayButton={false}
                  showThumbnails={false}
                  autoPlay
                  slideInterval={10000}
                  slideDuration={1000}
                  additionalClass="custom-gallery"
                  renderItem={(item, index) => (
                    <picture>
                      <source media="(max-width: 768px)" srcSet={item.mobile} />
                      <source
                        media="(min-width: 769px)"
                        srcSet={item.desktop}
                      />

                      <img
                        src={item.desktop}
                        alt={item.originalAlt}
                        className="w-full h-full object-cover"
                        loading={index === 0 ? 'eager' : 'lazy'}
                        fetchpriority={index === 0 ? 'high' : 'auto'}
                        decoding="async"
                      />
                    </picture>
                  )}
                />

                <style>
                  {`
                    .custom-gallery .image-gallery-slide img {
                      width: 100%;
                      height: 100%;
                      object-fit: cover;
                      transition: transform 1s ease-in-out, opacity 1s ease-in-out;
                    }
                    .custom-gallery .image-gallery-slide {
                      transition: opacity 1s ease-in-out;
                    }
                    .custom-gallery .image-gallery-slide.center {
                      opacity: 1;
                    }
                    .custom-gallery .image-gallery-slide.left,
                    .custom-gallery .image-gallery-slide.right {
                      opacity: 0;
                    }
                  `}
                </style>
                {/* <div className="absolute inset-0 bg-black opacity-40 z-10"></div> */}
              </div>

              {/* Texto sobreposto com animação suave */}
              {/* <div className="absolute inset-0 flex items-center justify-center z-20">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={currentIndex}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className={`font-bold text-center text-paragraph4 tablet1:text-paragraph4 leading-6 tablet1:leading-8 desktop1:text-paragraph4 desktop1:leading-[60px] w-[90%] m-auto ${titleColor}`}
                  >
                    {captions[currentIndex]}
                  </motion.h1>
                </AnimatePresence>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
