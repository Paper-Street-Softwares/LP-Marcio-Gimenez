// import { useState, useEffect } from "react";
// import { Sidebar } from "primereact/sidebar";
// import { Button } from "primereact/button";
// import { Ripple } from "primereact/ripple";
// import "primeicons/primeicons.css";
// import { FileText } from "lucide-react";

// import {
//   HelpCircle,
//   HomeIcon,
//   ServerIcon,
//   UserSearch,
//   AlignJustify,
// } from "lucide-react";
// import { MapPinCheck } from "lucide-react";
// import { Link } from "react-scroll";
// import content from "../../content/content";
// import ButtonWithIconNavbar from "../interactives/ButtonWithIconNavbar";

// export default function SidebarSocial({ colorMode }) {
//   const [visible, setVisible] = useState(false);
//   const [submenuVisible, setSubmenuVisible] = useState(true);
//   const [reportsSubmenuVisible, setReportsSubmenuVisible] = useState(false);
//   const [revenueSubmenuVisible, setRevenueSubmenuVisible] = useState(false);
//   const [aplicationSubmenuVisible, setAplicationSubmenuVisible] =
//     useState(true);
//   const [scrolled, setScrolled] = useState(false);

//   const toggleSidebar = () => {
//     setVisible(!visible);
//   };

//   const [visibleSections, setVisibleSections] = useState([]);

//   useEffect(() => {
//     const allIds = content.texts.navbar.menuId;
//     const existing = allIds.filter((id) => document.getElementById(id));
//     setVisibleSections(existing);
//   }, []);

//   return (
//     <div className="inset-0 z-10 flex">
//       <div
//         className={`${
//           visible ? "block" : "hidden"
//         } fixed inset-0 bg-darker opacity-50 lg:hidden`}
//         onClick={toggleSidebar}
//       />

//       <div className="flex justify-center card">

//         <AlignJustify
//           className={`p-button-rounded p-button-outlined lg:hidden ${
//             colorMode
//               ? scrolled
//                 ? "text-primary"
//                 : "text-primary"
//               : "text-primary"
//           } w-[40px] h-[40px]`}
//           onClick={() => setVisible(true)}
//         />

//         <Sidebar
//           visible={visible}
//           className="w-[280px]"
//           onHide={() => setVisible(false)}
//           content={({ closeIconRef, hide }) => (
//             <div
//               id="app-sidebar-2"
//               className={`${
//                 colorMode
//                   ? "bg-bgSectionDark"
//                   : "absolute top-0 left-0 flex-shrink-0 h-screen border-r-[1px] select-none bg-bgSectionDark surface-section lg:hidden lg:static z-1 surface-border border-neutral-700"
//               }`}
//               style={{ width: "280px" }}
//             >
//               <div className="flex flex-col h-full">
//                 <div className="flex items-center justify-between flex-shrink-0 px-4 pt-6 ">
//                   <span className="inline-flex items-center gap-2">
//                     <img
//                       src={content.texts.navbar.solidLogo.img}
//                       alt={content.texts.navbar.solidLogo.alt}
//                       className="w-auto h-auto p-[5px] "
//                     />
//                   </span>
//                   <span>
//                     <Button
//                       type="button"
//                       ref={closeIconRef}
//                       onClick={(e) => hide(e)}
//                       icon="pi pi-times"
//                       rounded
//                       outlined
//                       className={`${
//                         colorMode
//                           ? "text-white"
//                           : "h-2rem w-2rem p-[5px] text-white"
//                       }`}
//                     ></Button>
//                   </span>
//                 </div>
//                 <div className="h-screen overflow-y-auto">
//                   <hr className="m-5 mx-3 border-top-1 surface-border border-white" />
//                   <ul className="p-3 m-0 list-none">
//                     <li>
//                       {submenuVisible && (
//                         <ul
//                           className={`${
//                             colorMode
//                               ? "text-white"
//                               : "p-0 m-0 -mt-[16px] overflow-hidden font-medium text-white"
//                           } list-none text-paragraph3 font-mainFont`}
//                         >
//                           {content.texts.navbar.menuItems.map((item, index) => {
//                             const id = content.texts.navbar.menuId[index];
//                             if (!visibleSections.includes(id)) return null;

//                             return (
//                               <li key={id}>
//                                 <a className="flex items-center w-full p-3 transition-colors cursor-pointer p-ripple border-round text-700 hover:surface-100 transition-duration-150">
//                                   {index === 0 && <HomeIcon />}{" "}
//                                   {index === 1 && <UserSearch />}{" "}
//                                   {index === 2 && <ServerIcon />}{" "}
//                                   {index === 3 && <FileText />}{" "}
//                                   {index === 4 && <HelpCircle />}{" "}
//                                   {index === 5 && <MapPinCheck />}{" "}
//                                   <span className="ml-[8px]">
//                                     <Link
//                                       to={id}
//                                       className="align-text-top cursor-pointer"
//                                       spy={true}
//                                       smooth={true}
//                                       duration={500}
//                                       offset={-70}
//                                       href="#"
//                                     >
//                                       {item}
//                                     </Link>
//                                   </span>
//                                   <Ripple />
//                                 </a>
//                               </li>
//                             );
//                           })}
//                         </ul>
//                       )}
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           )}
//         ></Sidebar>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";
import {
  AlignJustify,
  HomeIcon,
  UserSearch,
  ServerIcon,
  FileText,
  HelpCircle,
  MapPinCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import content from "../../content/content";

export default function SidebarSocial({ colorMode }) {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setVisible(!visible);

  // Lista de itens da sidebar, com ícones e rotas
  const menuItems = [
    { label: "Home", route: "/", icon: <HomeIcon /> },
    { label: "Trajetória", route: "/trajetoria", icon: <UserSearch /> },
    { label: "Áreas de Atuação", route: "/servicos", icon: <ServerIcon /> },
    { label: "Artigos", route: "/artigos", icon: <FileText /> },
  ];

  return (
    <div className="inset-0 z-10 flex">
      {/* Fundo escuro ao abrir */}
      <div
        className={`${
          visible ? "block" : "hidden"
        } fixed inset-0 bg-darker opacity-50 lg:hidden`}
        onClick={toggleSidebar}
      />

      <div className="flex justify-center card">
        {/* Ícone do menu (hamburger) */}
        <AlignJustify
          className={`p-button-rounded p-button-outlined lg:hidden ${
            colorMode ? "text-primary" : "text-primary"
          } w-[40px] h-[40px]`}
          onClick={() => setVisible(true)}
        />

        {/* Sidebar */}
        <Sidebar
          visible={visible}
          className="w-[280px]"
          onHide={() => setVisible(false)}
          content={({ closeIconRef, hide }) => (
            <div
              id="app-sidebar-social"
              className={`${
                colorMode
                  ? "bg-bgSectionDark"
                  : "absolute top-0 left-0 flex-shrink-0 h-screen border-r-[1px] select-none bg-bgSectionDark lg:hidden lg:static z-1 border-neutral-700"
              }`}
              style={{ width: "280px" }}
            >
              <div className="flex flex-col h-full">
                {/* Topo */}
                <div className="flex items-center justify-between flex-shrink-0 px-4 pt-6">
                  <span className="inline-flex items-center gap-2">
                    <img
                      src={content.texts.navbar.solidLogo.img}
                      alt={content.texts.navbar.solidLogo.alt}
                      className="w-auto h-auto p-[5px]"
                    />
                  </span>
                  <Button
                    type="button"
                    ref={closeIconRef}
                    onClick={(e) => hide(e)}
                    icon="pi pi-times"
                    rounded
                    outlined
                    className="text-white h-2rem w-2rem p-[5px]"
                  />
                </div>

                {/* Itens do menu */}
                <div className="h-screen overflow-y-auto">
                  <hr className="m-5 mx-3 border-top-1 surface-border border-white" />

                  <ul
                    className={`${
                      colorMode ? "text-white" : "text-white"
                    } list-none text-paragraph3 font-mainFont`}
                  >
                    {menuItems.map(({ label, route, icon }) => (
                      <li
                        key={label}
                        className="flex items-center gap-3 px-6 py-3 cursor-pointer hover:opacity-80"
                        onClick={() => {
                          navigate(route);
                          setVisible(false);
                          window.scrollTo(0, 0);
                        }}
                      >
                        {icon}
                        <span className="font-semibold">{label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        ></Sidebar>
      </div>
    </div>
  );
}
