import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import SectionTitles from "../sectionElements/SectionTitles";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import content from "../../content/content";
import Button from "../interactives/Button";
import SectionHeader from "../sectionElements/SectionHeader";
import HowItWorksCard from "../cards/HowItWorksCard";
import WhatsappForm from "../interactives/WhatsappForm";

export default function Steps() {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  return (
    <SectionArea className="bg-bgSectionDark " id="maps">
      <SectionWrapper className="flex flex-col desktop1:flex-row-reverse gap-[40px] desktop2:gap-0 desktop1:justify-between desktop1:items-start">
        <MotionDivDownToUp className="flex-col w-full desktop1:w-[415px] desktop2:w-[485px] flex justify-center items-center ">
          <SectionHeader
            className="text-center desktop1:flex desktop1:w-full"
            miniTitle="CONTATO"
            sectionHeaderTitle="Nossos canais de atendimento"
            sectionHeaderSubtitle="O primeiro passo para a solução jurídica do seu caso começa aqui. Escolha o canal de sua preferência e inicie sua estratégia conosco."
            color=""
            type=""
            miniTitleBgColor="bg-white"
            miniTitleTextColor="text-secondary"
          />
          <WhatsappForm />
        </MotionDivDownToUp>

        <MotionDivDownToUp className="w-full flex-col desktop1:w-[415px] desktop2:w-[485px] flex justify-center items-center">
          <SectionHeader
            className="text-center desktop1:flex desktop1:w-full "
            miniTitle={content.texts.maps.minitag}
            sectionHeaderTitle={content.texts.maps.title}
            sectionHeaderSubtitle={content.texts.maps.subtitle}
            color=""
            type=""
            miniTitleBgColor="bg-white"
            miniTitleTextColor="text-secondary"
          />
          <div className="relative w-full h-auto bg-no-repeat bg-cover desktop1:bg-center tablet1:w-full ">
            {/* <p className="font-bold mt-[32px] mb-[16px]">
              Nos encontre no Google Maps
            </p> */}
            <div className="opacity-90">
              <iframe
                src={content.texts.maps.embedsrc}
                width="100%"
                height=""
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className=" h-[350px] desktop1:h-[420px]"
              />
            </div>
            {/* <img
              alt="Imagem de efeito pontilhado"
              src={imgPoints}
              className="absolute opacity-30 right-[-10px] top-[20px] desktop1:right-[-40px] desktop1:top-[40px]"
            ></img> */}
          </div>
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}
