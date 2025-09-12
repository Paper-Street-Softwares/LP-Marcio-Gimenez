import React from "react";
import Navbar from "../components/sections/NavbarSocial";
import FooterSocial from "../components/sections/FooterSocial";
import PrivacySection from "../components/sections/PrivacySection";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";

export default function Privacy() {
  return (
    <>
      <PrivacySection />
      <FloatingWhatsappButton />
      <BackToTopButton />
    </>
  );
}
