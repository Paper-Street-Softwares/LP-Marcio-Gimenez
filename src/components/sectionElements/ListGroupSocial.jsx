import { Link } from "react-scroll";
import content from "../../content/content";
import { useState, useEffect } from "react";
import Button from "../interactives/Button";

export default function ListGroupSocial({ colorMode = "default" }) {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrolling, setScrolling] = useState(false);

  // Detecta rolagem
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mapeia IDs e Labels do content
  useEffect(() => {
    const allIds = content.texts.navbar.menuId || [];
    const allLabels = content.texts.navbar.menuItems || [];

    const paired = allIds.map((id, index) => ({
      id,
      label: allLabels[index] || id,
    }));

    const filtered = paired.filter(({ id }) => !!document.getElementById(id));
    setVisibleSections(filtered);
  }, []);

  // Funções de estilo
  const getTextColor = () => {
    if (colorMode === "light") {
      return scrolling ? "text-black" : "text-black";
    }
    if (colorMode === "dark") {
      return scrolling ? "text-white" : "text-white";
    }
    return scrolling ? "text-gray-800" : "text-gray-800";
  };

  const getHoverTextColor = () => {
    if (colorMode === "light") {
      return scrolling ? "hover:text-black" : "hover:text-black";
    }
    if (colorMode === "dark") {
      return scrolling ? "hover:text-white" : "hover:text-white";
    }
    return scrolling ? "hover:text-gray-800" : "hover:gray-800";
  };

  const getBorderColor = () => {
    if (colorMode === "light") {
      return scrolling ? "bg-black" : "bg-black";
    }
    if (colorMode === "dark") {
      return scrolling ? "bg-white" : "bg-white";
    }
    return scrolling ? "bg-gray-800" : "bg-gray-800";
  };

  const textShadow =
    colorMode === "dark" || colorMode === "default"
      ? "[text-shadow:_2px_2px_3px_rgb(0_0_0_/_0%)]"
      : "";

  return (
    <ul
      className={`h-14 hidden desktop1:flex my-auto items-center justify-end tablet1:items-center desktop1:gap-4 desktop2:gap-6 w-auto font-normal text-paragraph3 font-times ${getTextColor()}`}
    >
      {visibleSections.map(({ id, label }, index) => (
        <li key={id} className="transition group h-[24px] flex items-center">
          <Link
            to={id}
            className="relative font-semibold cursor-pointer"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
          >
            <span
              className={`h-[24px] inline-block text-center ${getHoverTextColor()} ${textShadow}`}
            >
              {label}
            </span>
            <div
              className={`absolute -bottom-2 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${getBorderColor()}`}
            />
          </Link>

          {/* separador | só se não for o último */}
          {index < visibleSections.length - 1 && (
            <span
              className={`pl-6 flex items-center justify-center select-none ${
                colorMode === "dark" ? "text-white/70" : "text-gray-800"
              }`}
            >
              |
            </span>
          )}
        </li>
      ))}

      {/* Botão contato (opcional, descomentando abaixo) */}

      <li>
        <div className="flex gap-[10px] items-center">
          <Button
            aria-label={content.texts.hero.ctaButtonAriaLabel}
            label="Contato"
            className=""
            textclassName="text-paragraph3"
            size="small"
            // icon={
            //   <svg
            //     xmlns="http://www.w3.org/8000/svg"
            //     width="18"
            //     height="18"
            //     fill="currentColor"
            //     className="bi bi-whatsapp"
            //     viewBox="0 0 18 18"
            //   >
            //     <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            //   </svg>
            // }
          />
        </div>
      </li>
    </ul>
  );
}
