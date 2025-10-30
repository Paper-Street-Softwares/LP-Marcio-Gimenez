import React from "react";
import SectionArea from "../sectionElements/SectionArea";
import "react-image-gallery/styles/css/image-gallery.css";
import SectionHeader from "../sectionElements/SectionHeader";
import AboutModal from "../sectionElements/about/AboutModal";
import content from "../../content/content";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import GalleryAbout from "../sectionElements/about/GalleryAbout";
import ParagraphSemFading from "../sectionElements/about/ParagraphSemFading";
import ParagraphWithFading from "../sectionElements/about/ParagraphWithFading";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import img1 from "../../assets/imgs/about/imgGaleria1.webp";
import img2 from "../../assets/imgs/about/imgGaleria2.webp";
import img3 from "../../assets/imgs/about/imgGaleria3.webp";

export default function AboutCompleto({
  modal = true,
  showGallery = false,
  colorMode,
}) {
  // Definir classes de tema
  const bgClasses = {
    dark: "bg-bgFixedDark",
    light: "bg-bgFixedLight",
    default: "bg-white",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-primary",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const titleColor = textClasses[colorMode] || textClasses.default;
  const subtitleColor =
    colorMode === "light" ? "text-gray-600" : "text-gray-600";

  const images = [
    {
      original: img1,
      thumbnail: img1,
    },
    {
      original: img2,
      thumbnail: img2,
    },
    {
      original: img3,
      thumbnail: img3,
    },
  ];

  return (
    <SectionArea
      id="about"
      className={`${bgClass} transition-colors duration-1000`}
    >
      <SectionWrapper className="flex flex-col desktop1:flex-row-reverse gap-[40px] desktop1:gap-x-[40px] desktop2:gap-0 desktop1:justify-between">
        <div className="desktop1:w-full font-mainFont ">
          <h1 className="text-bgSectionDark text-title6 font-bold text-center leading-[50px] pb-4 desktop1:text-start">
            Marcio Gimenez
          </h1>
          <div className="flex flex-col gap-8 desktop1:gap-0 desktop1:flex-row-reverse justify-between">
            <MotionDivDownToUp className="relative w-[90%] desktop1:w-[415px] desktop2:w-[450px] flex justify-center m-auto desktop1:m-0">
              <img
                src={content.texts.about.imagem.img}
                alt={content.texts.about.imagem.alt}
                className="w-[100%] desktop1:w-[415px] desktop2:w-[485px] "
              />
            </MotionDivDownToUp>
            <MotionDivDownToUp className="text-center desktop1:text-start desktop1:w-[50%] ">
              <div className="flex flex-col gap-4">
                <p className="text-justify">
                  Com mais de duas décadas de atuação, o escritório se destaca
                  pela combinação de rigor técnico e visão estratégica,
                  oferecendo soluções jurídicas que aliam experiência
                  administrativa e prática empresarial.
                </p>
                <p className="text-justify">
                  O mesmo rigor que orienta nossa prática junto a empresas e
                  instituições também se aplica ao atendimento de pessoas
                  físicas. Demandas familiares, sucessórias e imobiliárias
                  recebem tratamento estratégico e sensível, sempre com foco em
                  preservar patrimônios, prevenir litígios e garantir soluções
                  de longo prazo.
                </p>
                <p className="text-justify">
                  Nosso propósito é transformar complexidade em clareza,
                  conduzindo clientes com segurança nas relações legais e
                  operações de grande relevância. Atuamos para proteger
                  patrimônios, fortalecer empresas e oferecer estabilidade
                  jurídica em um mundo em constante transformação.
                </p>
                <p className="text-justify">
                  Toda trajetória sólida nasce da combinação entre vivência
                  prática e rigor técnico. Foi assim que Marcio Gimenez
                  consolidou sua carreira jurídica, marcada pela clareza em meio
                  à complexidade, pela crítica refinada da realidade e pela
                  convicção de que o Direito é, antes de tudo, um instrumento de
                  estratégia e proteção patrimonial.
                </p>
                <p className="text-justify">
                  Durante 14 anos, trabalhou dentro da Administração Pública,
                  assessorando prefeitos, secretários e presidentes de câmaras
                  legislativas. Exerceu funções como pregoeiro e presidente de
                  comissões de licitação, elaborando pareceres técnicos,
                  contratos e editais de grande relevância. Nessa vivência,
                  destacou-se pela atuação perante o Tribunal de Contas do
                  Estado de São Paulo, conduzindo defesas e estruturando
                  estratégias em processos de controle externo que exigiam
                  precisão e altivez.
                </p>
              </div>
            </MotionDivDownToUp>
          </div>
          <div className="text-center desktop1:text-start w-[100%] pt-4 flex flex-col gap-4 ">
            <p className="text-justify">
              Essa experiência na área pública permitiu a compreensão das
              engrenagens administrativas por dentro: como o Estado decide, como
              aplica suas normas e como tensiona a relação entre legalidade,
              interesse público e viabilidade prática. Conhecimento que hoje se
              converte em diferencial estratégico para empresas e clientes que
              precisam atuar em licitações, contratos administrativos ou em
              demandas que envolvem a máquina estatal.
            </p>
            <p className="text-justify">
              Ao lado dessa experiência, desenvolveu uma prática sólida no setor
              privado. Foram mais de duas décadas assessorando empresas de
              grande porte, grupos multinacionais e construtoras em projetos de
              alta complexidade, que incluíram desde obras de infraestrutura e
              transporte público até incorporações imobiliárias e contratos
              internacionais. Essa atuação proporcionou contato direto com
              setores regulados como construção civil, logística, indústria
              alimentícia, metalurgia e empresas de tecnologia, garantindo ao
              escritório uma visão ampla do ambiente corporativo.
            </p>
            <p className="text-justify">
              O mesmo rigor técnico aplicado na assessoria a empresas e
              instituições também orienta o atendimento de pessoas físicas.
              Questões familiares, sucessórias e patrimoniais são conduzidas com
              sensibilidade e estratégia, sempre com foco em preservar bens,
              prevenir litígios e garantir soluções duradouras. Esse equilíbrio
              assegura que tanto indivíduos quanto organizações contem com um
              suporte jurídico sólido, discreto e eficiente.
            </p>
            <p className="text-justify">
              No contencioso, conduziu disputas judiciais de alta complexidade,
              sempre com enfoque estratégico e resultados expressivos em
              instâncias superiores. Na consultoria, elaborou e revisou
              contratos empresariais e administrativos de grande relevância,
              estruturando operações e prevenindo litígios com precisão técnica.
              Ao longo desse caminho, integrou práticas modernas, como programas
              de compliance corporativo e adequação à LGPD, reforçando a conexão
              entre Direito, governança e competitividade.
            </p>
            <p className="text-justify">
              Dessa soma de vivências nasce o Marcio Gimenez Advocacia, um
              escritório moldado para oferecer soluções jurídicas de alto nível,
              unindo a visão institucional adquirida na Administração Pública à
              experiência prática consolidada no setor privado. O escritório
              traduz a consolidação de uma trajetória pautada em rigor técnico,
              visão estratégica e autoridade institucional.
            </p>
            <p className="text-justify">
              Mais do que oferecer respostas jurídicas, o escritório entrega
              visão estratégica, proteção patrimonial e segurança de longo
              prazo. Porque, para nós, o Direito não é mero instrumento de
              reação: é ferramenta de poder, clareza e sofisticação para quem
              precisa conduzir seus interesses com solidez e inteligência.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
