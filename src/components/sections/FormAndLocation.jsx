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
import imgPoints from "../../assets/imgs/about/points.png";
import HowItWorksCard from "../cards/HowItWorksCard";
import SectionShapeDiv from "../sectionElements/SectionShapeDiv";
import WhatsappForm from "../interactives/WhatsappForm";

export default function FormAndLocation() {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  return (
    <SectionArea className="bg-bgSectionDark " paddingtop={true}>
      <SectionHeader
        className="text-center desktop1:flex justify-center desktop1:w-full"
        miniTitle="CONTATO"
        sectionHeaderTitle="Entre em Contato"
        sectionHeaderSubtitle="Preencha o formulário abaixo e responderemos o mais breve possível."
        color=""
        type=""
      />
      <SectionWrapper className="flex flex-col ">
        <MotionDivDownToUp className="flex-col w-full desktop1:w-[415px] desktop2:w-[485px] flex justify-center items-center ">
          <WhatsappForm />
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}
