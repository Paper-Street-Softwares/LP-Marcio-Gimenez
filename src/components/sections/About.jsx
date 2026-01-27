import React from 'react'
import SectionArea from '../sectionElements/SectionArea'
import 'react-image-gallery/styles/css/image-gallery.css'
import SectionHeader from '../sectionElements/SectionHeader'
import AboutModal from '../sectionElements/about/AboutModal'
import content from '../../content/content'
import SectionWrapper from '../sectionElements/SectionWrapper'
import MotionDivDownToUp from '../animation/MotionDivDownToUp'
import GalleryAbout from '../sectionElements/about/GalleryAbout'
import ParagraphSemFading from '../sectionElements/about/ParagraphSemFading'
import ParagraphWithFading from '../sectionElements/about/ParagraphWithFading'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
// import img1 from '../../assets/imgs/about/imgGaleria1.webp'
// import img2 from '../../assets/imgs/about/imgGaleria2.webp'
// import img3 from '../../assets/imgs/about/imgGaleria3.webp'

export default function About({
  modal = true,
  showGallery = false,
  colorMode,
}) {
  // Definir classes de tema
  const bgClasses = {
    dark: 'bg-bgFixedDark',
    light: 'bg-bgFixedLight',
    default: 'bg-white',
  }
  const textClasses = {
    dark: 'text-white',
    light: 'text-black',
    default: 'text-bgSectionDark',
  }
  const bgClass = bgClasses[colorMode] || bgClasses.default
  const titleColor = textClasses[colorMode] || textClasses.default
  const subtitleColor =
    colorMode === 'light' ? 'text-gray-600' : 'text-gray-600'

  // const images = [
  //   {
  //     original: img1,
  //     thumbnail: img1,
  //   },
  //   {
  //     original: img2,
  //     thumbnail: img2,
  //   },
  //   {
  //     original: img3,
  //     thumbnail: img3,
  //   },
  // ]

  return (
    <SectionArea
      id="about"
      className={`${bgClass} transition-colors duration-1000`}
    >
      <SectionWrapper className="flex flex-col desktop1:flex-row-reverse gap-[40px] desktop1:gap-x-[40px] desktop2:gap-0 desktop1:justify-between">
        <div className="desktop1:w-full ">
          <SectionHeader
            className="text-center"
            // miniTitle={content.texts.about.miniTag}
            sectionHeaderTitle={content.texts.about.title}
            sectionHeaderSubtitle={content.texts.about.subtitle}
            color={colorMode}
            type=""
            titleColorSet={titleColor}
            subtitleColorSet="text-bgSectionDark"
            miniTitleBgColor={false}
          />
          <div className="flex flex-col gap-8 desktop1:gap-0 desktop1:flex-row-reverse justify-between">
            <MotionDivDownToUp className="relative w-[90%] desktop1:w-[600px] aspect-[3/1] flex justify-center m-auto desktop1:m-0">
              <img
                src={content.texts.about.imagem.img}
                alt={content.texts.about.imagem.alt}
                className="w-[90%]"
                width={540}
                height={416}
              />
            </MotionDivDownToUp>
            <MotionDivDownToUp className="text-center desktop1:text-start desktop1:w-[50%] ">
              {modal ? (
                <ParagraphWithFading colorMode={colorMode} />
              ) : (
                <ParagraphSemFading colorMode={colorMode} />
              )}
              {modal && <AboutModal colorMode={colorMode} />}
            </MotionDivDownToUp>
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  )
}
