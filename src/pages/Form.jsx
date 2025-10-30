import React from "react";
import Navbar from "../components/sections/NavbarSocial";
import FooterSocial from "../components/sections/FooterSocial";
import PrivacySection from "../components/sections/PrivacySection";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import SectionHeader from "../components/sectionElements/SectionHeader";
import content from "../content/content";
import SectionArea from "../components/sectionElements/SectionArea";
import FormAndLocation from "../components/sections/FormAndLocation";

export default function Form() {
  return (
    <>
      <div className="bg-bgSectionDark h-48 flex items-center justify-center">
        <h1 className="text-black text-title7 font-mainFont  ">CONTATO</h1>
      </div>
      <FormAndLocation />

      <button className="bg-bgSectionDark fixed bottom-2 left-8 p-4 rounded-full hover:scale-105 duration-300 transition-all">
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-arrow-left-icon lucide-arrow-left"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
        </a>
      </button>
    </>
  );
}
