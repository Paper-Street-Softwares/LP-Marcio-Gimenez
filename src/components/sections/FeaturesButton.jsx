import { useState } from "react";
import "primeicons/primeicons.css";
import { Dialog } from "primereact/dialog";
import content from "../../content/content";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import SectionArea from "../sectionElements/SectionArea";
import ServiceDetailCard from "../cards/ServiceDetailCard";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import FeatureImgOnBgCardButton from "../cards/FeatureImgOnBgCardButton";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function FeaturesButton({ colorMode }) {
  const [visible, setVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalSubtitle, setModalSubtitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const onClick = (title, subtitle, content) => {
    setModalTitle(title);
    setModalSubtitle(subtitle);
    setModalContent(content);
    setVisible(true);
  };

  // Definir classes de cor para SectionArea
  const bgClasses = {
    dark: "bg-bgSectionOpacityDark",
    light: "bg-bgSectionOpacityLight",
    default: "bg-bgSectionDark",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-white",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const textClass = textClasses[colorMode] || textClasses.default;

  return (
    <>
      <SectionArea paddingbot={false} id={"service"} className={` ${bgClass}`}>
        <SectionHeader
          className={`text-center ${textClass}`}
          miniTitle={content.texts.features.miniTag}
          sectionHeaderTitle={content.texts.features.title}
          sectionHeaderSubtitle={content.texts.features.subtitle}
          titleColorSet={textClass}
          subtitleColorSet={textClass}
          miniTitleBgColor="bg-white"
          miniTitleTextColor="text-secondary"
        />
        <SectionWrapper>
          <div className="flex flex-wrap justify-center desktop1:justify-evenly w-full gap-[36px] tablet1:gap-[24px] desktop1:gap-0 desktop1:w-[90%]">
            {[1, 2, 3, 4, 5, 6].map((i) => {
              const card = content.texts.features[`card${i}`];
              return (
                <Link
                  key={i}
                  to={`/${card.slug}`}
                  className="block w-fit" // garante que o link ocupe o tamanho do card
                >
                  <FeatureImgOnBgCardButton
                    bgImg={card.img}
                    title={card.title}
                    description={card.subtitle}
                    buttonLabel={card.buttonLabel}
                    buttonLink={`/${card.slug}`}
                    animation
                  />
                </Link>
              );
            })}
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
