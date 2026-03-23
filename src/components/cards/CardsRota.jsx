import { useParams } from "react-router-dom";
import content from "../../content/content";
import ServiceDetailCard from "./ServiceDetailCard";
import { FaWhatsapp } from "react-icons/fa";
import FooterRota from "../sections/FooterRota";
import NavbarRota from "../sections/NavbarRota";
import FooterSocial from "../sections/FooterSocial";

export default function CardsRota({ colorMode }) {
  const { cardSlug } = useParams(); // usar slug em vez de title

  // Encontrar o card correspondente pelo slug
  const card = Object.values(content.texts.features)
    .filter((c) => c?.slug)
    .find((c) => c.slug === cardSlug);

  if (!card) return <p>Feature não encontrada</p>;

  return (
    <div
      className={` ${
        colorMode === "dark"
          ? "bg-bgSectionOpacityDark text-white"
          : "bg-bgSectionOpacityLight text-black"
      }`}
    >
      <NavbarRota />
      <div className="pt-[150px] tablet1:pt-[170px] pb-[46px] w-[90%] max-w-[1215px] m-auto">
        <h1 className="text-2xl font-bold mb-4">{card.title}</h1>
        <ServiceDetailCard
          img={card.imgModal}
          description={card.description}
          buttonIcon={<FaWhatsapp size={24} color="white" />}
          buttonLabel={card.buttonLabelModal}
          buttonLink={content.texts.links.ctaWhatsapp}
          bgPosition="bg-top"
        />
      </div>
      {/* <FooterRota /> */}
      <FooterSocial
        addresSecundario={false}
        phoneTerciario={false}
        expedientesecond={false}
        addres={true}
      />
    </div>
  );
}
