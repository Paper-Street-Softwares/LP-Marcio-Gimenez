import React from "react";
import Navbar from "../components/sections/NavbarSocial";
import FooterSocial from "../components/sections/FooterSocial";
import PrivacySection from "../components/sections/PrivacySection";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import FooterPrivacidade from "../components/sections/FooterPrivacidade";

export default function Privacy() {
  return (
    <>
      <PrivacySection />
      <FooterPrivacidade />
      <FloatingWhatsappButton />
      <BackToTopButton />
    </>
  );
}
