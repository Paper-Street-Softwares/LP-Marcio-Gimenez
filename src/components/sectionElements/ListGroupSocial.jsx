import { Link as RouterLink } from "react-router-dom";
import content from "../../content/content";
import { useState, useEffect } from "react";
import Button from "../interactives/Button";

export default function ListGroupSocial({ colorMode = "default" }) {
  const [scrolling, setScrolling] = useState(false);

  // Detecta rolagem
  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Itens do menu e rotas
  const menuItems = [
    { label: "Home", route: "/" },
    { label: "Trajetória", route: "/trajetoria" },
    { label: "Áreas de Atuação", route: "/servicos" },
    { label: "Artigos", route: "/artigos" },
  ];

  // Funções de estilo
  const getTextColor = () => {
    if (colorMode === "light") return "text-black";
    if (colorMode === "dark") return "text-white";
    return "text-gray-800";
  };

  const getHoverTextColor = () => {
    if (colorMode === "light") return "hover:text-black";
    if (colorMode === "dark") return "hover:text-white";
    return "hover:text-gray-800";
  };

  const getBorderColor = () => {
    if (colorMode === "light") return "bg-black";
    if (colorMode === "dark") return "bg-white";
    return "bg-gray-800";
  };

  const textShadow =
    colorMode === "dark" || colorMode === "default"
      ? "[text-shadow:_2px_2px_3px_rgb(0_0_0_/_0%)]"
      : "";

  return (
    <ul
      className={`h-14 hidden desktop1:flex my-auto items-center justify-end tablet1:items-center desktop1:gap-4 desktop2:gap-6 w-auto font-normal text-paragraph3 font-times ${getTextColor()}`}
    >
      {menuItems.map(({ label, route }, index) => (
        <li key={label} className="transition group h-[24px] flex items-center">
          <RouterLink
            to={route}
            className={`relative font-semibold cursor-pointer ${getHoverTextColor()}`}
          >
            <span className={`h-[24px] inline-block text-center ${textShadow}`}>
              {label}
            </span>
            <div
              className={`absolute -bottom-2 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${getBorderColor()}`}
            />
          </RouterLink>

          {/* separador | só se não for o último */}
          {index < menuItems.length - 1 && (
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

      {/* Botão contato */}
      <li>
        <div className="flex gap-[10px] items-center">
          <Button
            aria-label={content.texts.hero.ctaButtonAriaLabel}
            label="Contato"
            buttonLink="/formulario"
            textclassName="text-paragraph3"
            size="small"
          />
        </div>
      </li>
    </ul>
  );
}
