import React from 'react'
import SectionArea from '../sectionElements/SectionArea'
import 'react-image-gallery/styles/css/image-gallery.css'
import SectionHeader from '../sectionElements/SectionHeader'
import AboutModal from '../sectionElements/about/AboutModal'
import content from '../../content/content'
import SectionWrapper from '../sectionElements/SectionWrapper'
import MotionDivDownToUp from '../animation/MotionDivDownToUp'
import GalleryAbout from '../sectionElements/about/GalleryAbout'
import ParagraphSemFading from '../sectionElements/about/ParagraphSemFading'
import ParagraphWithFading from '../sectionElements/about/ParagraphWithFading'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import img1 from '../../assets/imgs/about/imgGaleria1.webp'
import img2 from '../../assets/imgs/about/imgGaleria2.webp'
import img3 from '../../assets/imgs/about/imgGaleria3.webp'

export default function AboutCompleto({
  modal = true,
  showGallery = false,
  colorMode,
}) {
  // Definir classes de tema
  const bgClasses = {
    dark: 'bg-bgFixedDark',
    light: 'bg-bgFixedLight',
    default: 'bg-white',
  }
  const textClasses = {
    dark: 'text-white',
    light: 'text-black',
    default: 'text-primary',
  }
  const bgClass = bgClasses[colorMode] || bgClasses.default
  const titleColor = textClasses[colorMode] || textClasses.default
  const subtitleColor =
    colorMode === 'light' ? 'text-gray-600' : 'text-gray-600'

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
  ]

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
            <MotionDivDownToUp className="relative w-[90%] desktop1:w-[415px] desktop2:w-[550px] flex justify-center m-auto desktop1:m-0">
              <img
                src={content.texts.about.imagem.img}
                alt={content.texts.about.imagem.alt}
                className="w-full "
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
                  construiu sua carreira jurídica: unindo clareza em meio à
                  complexidade, visão crítica da realidade e a convicção de que
                  o Direito é, antes de tudo, instrumento de estratégia e
                  proteção patrimonial.
                </p>
                <p className="text-justify">
                  Durante 14 anos, atuou dentro da Administração Pública
                  assessorando prefeitos, secretários e presidentes de câmaras
                  legislativas. Nesse período, exerceu funções como pregoeiro e
                  presidente de comissões de licitação, elaborando editais,
                  contratos e pareceres de alta relevância. Destacou-se
                  especialmente na atuação perante o Tribunal de Contas do
                  Estado de São Paulo, estruturando defesas e conduzindo
                  estratégias em processos de controle externo que exigiam
                  precisão, cautela e firmeza institucional.
                </p>
                <p className="text-justify">
                  Essa vivência permitiu compreender as engrenagens
                  administrativas por dentro: como o Estado decide, como aplica
                  suas normas, como se formam os riscos e como se constrói
                  segurança jurídica na prática.
                </p>
                <p className="text-justify">
                  Ao lado dessa experiência pública, Marcio consolidou atuação
                  robusta no setor privado, assessorando empresas de grande
                  porte, grupos multinacionais e construtoras em operações
                  complexas — obras de infraestrutura, contratos internacionais,
                  incorporações, logística, indústria de alimentos, metalurgia e
                  tecnologia. Essa imersão conferiu visão corporativa ampla,
                  madura e integradora.
                </p>
                <p className="text-justify">
                  No contencioso, conduziu disputas judiciais estratégicas de
                  alta complexidade, com resultados expressivos em diferentes
                  instâncias. Na consultoria, estruturou dezenas de contratos
                  empresariais e administrativos, prevenindo litígios e
                  fortalecendo governança. Incorporou práticas modernas como
                  compliance, gestão de riscos e LGPD, conectando Direito,
                  gestão e competitividade.
                </p>
              </div>
            </MotionDivDownToUp>
          </div>
          <div className="text-center desktop1:text-start w-[100%] pt-4 flex flex-col gap-4 ">
            <p className="text-justify">
              Dessa combinação de vivências, pública, empresarial e
              institucional, nasce o Marcio Gimenez Advocacia, concebido para
              oferecer soluções jurídicas de alto nível, pautadas por rigor
              técnico, visão estratégica e autoridade institucional.
            </p>
            <p className="text-justify">
              O escritório carrega a mesma filosofia que moldou a trajetória do
              seu fundador: transformar complexidade em clareza, proteger
              patrimônios, fortalecer empresas e conduzir clientes com segurança
              em decisões de longo prazo.
            </p>
            <p className="text-justify">
              Atendemos empresas, famílias e indivíduos com a mesma intensidade
              técnica: preservando bens, prevenindo litígios, estruturando
              operações e garantindo estabilidade jurídica em um mundo que exige
              soluções precisas, discretas e eficazes.
            </p>
            <p className="text-justify">
              Mais do que respostas jurídicas, entregamos consistência,
              estratégia e proteção patrimonial. Porque o Direito, para nós, não
              é instrumento reativo, é ferramenta de poder, estabilidade e
              sofisticação.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  )
}
