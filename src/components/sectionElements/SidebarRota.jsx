import { useState, useEffect } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button as PrimeButton } from "primereact/button";
import { Ripple } from "primereact/ripple";
import "primeicons/primeicons.css";
import { FileText } from "lucide-react";
import Button from "../interactives/Button";
import { useNavigate } from "react-router-dom";

import {
  HelpCircle,
  HomeIcon,
  ServerIcon,
  UserSearch,
  AlignJustify,
} from "lucide-react";
import { MapPinCheck } from "lucide-react";
import { Link } from "react-scroll";
import content from "../../content/content";
import ButtonWithIconNavbar from "../interactives/ButtonWithIconNavbar";

export default function SidebarRota({ colorMode }) {
  const [visible, setVisible] = useState(false);
  const [submenuVisible, setSubmenuVisible] = useState(true);
  const [reportsSubmenuVisible, setReportsSubmenuVisible] = useState(false);
  const [revenueSubmenuVisible, setRevenueSubmenuVisible] = useState(false);
  const [aplicationSubmenuVisible, setAplicationSubmenuVisible] =
    useState(true);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setVisible(!visible);
  };

  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const allIds = content.texts.navbar.menuId;
    const existing = allIds.filter((id) => document.getElementById(id));
    setVisibleSections(existing);
  }, []);

  return (
    <div className="inset-0 z-10 flex">
      <div
        className={`${
          visible ? "block" : "hidden"
        } fixed inset-0 bg-darker opacity-50 lg:hidden`}
        onClick={toggleSidebar}
      />

      <div className="flex justify-center card">
        {/* <<<<<<<<<<<<<<< Cor do hamburger >>>>>>>>>>>>>> */}

        <AlignJustify
          className={`p-button-rounded p-button-outlined lg:hidden ${
            colorMode
              ? scrolled
                ? "text-primary"
                : "text-primary"
              : "text-primary"
          } w-[40px] h-[40px]`}
          onClick={() => setVisible(true)}
        />

        {/* <<<<<<<<<<<<<<< Cor do hamburger >>>>>>>>>>>>>> */}

        <Sidebar
          visible={visible}
          className="w-[280px]"
          onHide={() => setVisible(false)}
          content={({ closeIconRef, hide }) => (
            <div
              id="app-sidebar-2"
              className={`${
                colorMode
                  ? "bg-bgSectionDark"
                  : "absolute top-0 left-0 flex-shrink-0 h-screen border-r-[1px] select-none bg-bgSectionDark surface-section lg:hidden lg:static z-1 surface-border border-neutral-700"
              }`}
              style={{ width: "280px" }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between flex-shrink-0 px-4 pt-6 ">
                  <span className="inline-flex items-center gap-2">
                    <img
                      src={content.texts.navbar.solidLogo.img}
                      alt={content.texts.navbar.solidLogo.alt}
                      className="w-auto h-auto p-[5px] "
                    />
                  </span>
                  <span>
                    <PrimeButton
                      type="button"
                      ref={closeIconRef}
                      onClick={(e) => hide(e)}
                      icon="pi pi-times"
                      rounded
                      outlined
                      className={`${
                        colorMode
                          ? "text-white"
                          : "h-2rem w-2rem p-[5px] text-white"
                      }`}
                    ></PrimeButton>
                  </span>
                </div>
                <div className="h-screen overflow-y-auto">
                  <hr className="m-5 mx-3 border-top-1 surface-border border-white" />
                  <div className="flex w-full ml-3">
                    <Button
                      aria-label="Voltar ao Site"
                      label="Voltar ao Site"
                      onClick={() => {
                        navigate("/");
                        window.scrollTo(0, 0);
                      }}
                      animation
                      className="w-[100%] "
                      // icon={<FaWhatsapp size={24} color="black" />}
                      colorMode={colorMode}
                      color="bg-white"
                      textclassName="text-secondary"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        ></Sidebar>
      </div>
    </div>
  );
}
