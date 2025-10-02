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
    <SectionArea className="bg-white " id="maps">
      <SectionWrapper className="flex flex-col desktop1:flex-row-reverse gap-[40px] desktop2:gap-0 desktop1:justify-between desktop1:items-center">
        <MotionDivDownToUp className="flex-col w-full flex justify-center items-center ">
          <SectionHeader
            className="text-center desktop1:flex desktop1:w-full"
            miniTitle="CONTATO"
            sectionHeaderTitle="Nossos canais de atendimento"
            sectionHeaderSubtitle="O primeiro passo para a solução jurídica do seu caso começa aqui. Escolha o canal de sua preferência e inicie sua estratégia conosco."
            color=""
            type=""
            miniTitleBgColor="bg-black"
            miniTitleTextColor="text-white"
            subtitleColorSet="text-black/60"
            titleColorSet="text-secondary"
          />
          <WhatsappForm />
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}
