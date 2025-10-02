import logo from "../assets/imgs/logo/logo.webp";
import logoFooter from "../assets/imgs/logo/logoFooter.webp";

import heroImgPhone from "../assets/imgs/hero/personImg.png";
import heroImgDesktop from "../assets/imgs/hero/bgHeroInfluencer.webp";
import bgHeroImg from "../assets/imgs/hero/bgHeroInfluencer.jpeg";
import heroDefaultImg from "../assets/imgs/hero/lawHero.webp";
import backgroundPersonMobile from "../assets/imgs/hero/bgHeroMobile.jpg";

import imgFeatures from "../assets/imgs/features/imgServices.webp";
import imgDivisor from "../assets/imgs/features/imgDivisor.jpg";

import aboutImg1 from "../assets/imgs/about/aboutImg.webp";
import imgAbout1 from "../assets/imgs/about/aboutImg1.jpg";
import imgAbout2 from "../assets/imgs/about/aboutImg2.jpg";
import imgAbout3 from "../assets/imgs/about/aboutImg3.jpg";
import imgAbout4 from "../assets/imgs/about/aboutImg4.jpg";
import imgAbout5 from "../assets/imgs/about/aboutImg5.jpg";
import aboutSocialImg from "../assets/imgs/about/aboutSocial.png";
import aboutInstagram from "../assets/imgs/about/imgAboutInstagram.jpg";

import imgSteps from "../assets/imgs/steps/imgSteps.webp";

import numbersImgBg from "../assets/imgs/paralaxe/bgParalaxe1.jpg";

import trustedByImg1 from "../assets/imgs/trustedBy/item1.jpg";
import trustedByImg2 from "../assets/imgs/trustedBy/item2.jpg";
import trustedByImg3 from "../assets/imgs/trustedBy/item3.jpg";

import featuresImg1 from "../assets/imgs/features/imgFeatures1.webp";
import featuresImg2 from "../assets/imgs/features/imgFeatures2.webp";
import featuresImg3 from "../assets/imgs/features/imgFeatures3.webp";
import featuresImg4 from "../assets/imgs/features/imgFeatures4.webp";
import featuresImg5 from "../assets/imgs/features/imgFeatures6.webp";
import featuresImg6 from "../assets/imgs/features/imgFeatures5.webp";

import imgFeaturesCardModal1 from "../assets/imgs/features/imgFeaturesCardModal1.webp";
import imgFeaturesCardModal2 from "../assets/imgs/features/imgFeaturesCardModal2.webp";
import imgFeaturesCardModal3 from "../assets/imgs/features/imgFeaturesCardModal3.webp";
import imgFeaturesCardModal4 from "../assets/imgs/features/imgFeaturesCardModal4.webp";
import imgFeaturesCardModal5 from "../assets/imgs/features/imgFeaturesCardModal6.webp";
import imgFeaturesCardModal6 from "../assets/imgs/features/imgFeaturesCardModal5.webp";

import ctaWhatsappImgBg from "../assets/imgs/paralaxe/bgParalaxe2.jpg";

import teamMemberImg1 from "../assets/imgs/team/team1.webp";
import teamMemberImg2 from "../assets/imgs/team/team2.webp";
import teamMemberImg3 from "../assets/imgs/team/team3.webp";
import teamMemberImg4 from "../assets/imgs/team/team4.webp";

import imgTestimonial1 from "../assets/imgs/testimonials/deposition1.png";
import imgTestimonial2 from "../assets/imgs/testimonials/deposition2.png";
import imgTestimonial3 from "../assets/imgs/testimonials/deposition3.png";
import imgTestimonial4 from "../assets/imgs/testimonials/deposition4.png";
import { Briefcase, Gavel } from "lucide-react";
import { Users } from "lucide-react";
import { FileText } from "lucide-react";

const currentYear = new Date().getFullYear();

export const infos = {
  name: "Marcio Gimenez Advocacia | Direito Empresarial e Patrimonial em São Paulo - SP",
  email: "contato", // Email desejado pelo cliente
  emailTwo: "financeiro@marciogimenez.com.br", // Email desejado pelo cliente
  emailThree: "juridico@marciogimenez.com.br", // Email desejado pelo cliente
  emailFour: "secretaria@marciogimenez.com.br", // Email desejado pelo cliente
  emailFive: "marcio@marciogimenez.com.br", // Email desejado pelo cliente

  domain: "marciogimenez.com.br", // Sem "www"
  phone: {
    ddd: "11",
    firstPart: "96301", // Apenas os 5 primeiros números (incluindo o 9)
    secondPart: "0654", // Apenas os 4 últimos números
  },
  phoneSecundario: {
    ddd: "A_Definir",
    firstPart: "A_Definir", // Apenas os 5 primeiros números (incluindo o 9)
    secondPart: "A_Definir", // Apenas os 4 últimos números
  },
  phoneTerciario: {
    ddd: "A_Definir",
    firstPart: "A_Definir", // Apenas os 5 primeiros números (incluindo o 9)
    secondPart: "A_Definir", // Apenas os 4 últimos números
  },
  endereco: (
    <div>
      <p>Endereço:</p>
      <p>Av. Juscelino Kubitschek,</p>
      <p>nº 1455 São Paulo - SP,</p>
      <p>CEP: 04543-011</p>
    </div>
  ),
  enderecoSecundario: (
    <div>
      <p>Endereço:</p>
      <p>A_Definir</p>
      <p>A_Definir</p>
      <p>A_Definir</p>
    </div>
  ),
  expediente: (
    <div>
      <p>Horário de expediente:</p>
      <p>Segunda a Sexta-feira</p>
      <p>9h às 18h</p>
    </div>
  ),
  obs: <span className="italic">A Definir</span>,
  instagramProfile: "A_definir", // Sem o @
  facebookProfile: "A_Definir",
  linkeDinProfile: "A_Definir",
  x: "A_Definir",
  whatsappDefaultMessage:
    "Olá! Vim através do site de vocês e gostaria de tirar umas dúvidas.",
  whatsChatDefaultMessage:
    "Gostaria de falar conosco agora mesmo? Clque abaixo 👇",
  slogan: "",
};

const content = {
  texts: {
    navbar: {
      logo: {
        img: logo,
        alt: `Logomarca ${infos.name}`,
      },
      solidLogo: {
        img: logo,
        alt: `Logomarca ${infos.name}`,
      },
      logoFooter: {
        img: logoFooter,
        alt: `Logomarca ${infos.name}`,
      },
      menuItems: [
        "HOME",
        "ÁREAS DE ATUAÇÃO",
        "QUEM SOMOS",
        "ARTIGOS",
        "PERGUNTAS FREQUENTES",
      ],
      menuId: ["home", "service", "about", "blog", "faq"],

      ctaButtonText: "Contato",
      ctaButtonTextResponsive: "Contato",
    },
    hero: {
      miniTag: "ADVOGADO INTERNACIONAL COM ATUAÇÃO EM SÃO PAULO - SP",
      title: (
        <h1 className="mb-[16px]">
          Nem todo problema aceita
          <span className="text-primary"> receita pronta</span>
        </h1>
      ),
      subtitle:
        "Se a sua questão exige mais do que fórmulas, talvez você precise de mais do que um escritório comum.",
      heroImgPhone: heroImgPhone, // img da pessoa mobile
      heroDesktop: heroImgDesktop, //bg com foto da pessoa
      heroImg: bgHeroImg, //fundo da Hero
      heroDefaultImage: heroDefaultImg, //imagem da heroDefault Mobile
      backgroundPerson: backgroundPersonMobile,
      ctaButtonText: "Entrar em contato",
      obsHero: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-map-pin-check"
          >
            <path d="M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728" />
            <circle cx="12" cy="10" r="3" />
            <path d="m16 18 2 2 4-4" />
          </svg>
        ),
        text: "Atendimento presencial mediante agendamento e online, preferencialmente por videochamada.",
      },
      ctaButtonAriaLabel:
        "Botão para chamada de ação para contato pelo whatsapp",
      secondaryCta: "A_Definir",
      images: {
        background: bgHeroImg,
        static: {
          img: {},
          alt: "",
        },
        slide1: {
          img: {},
          alt: "",
        },
        slide2: {
          img: {},
          alt: "",
        },
        slide3: {
          img: {},
          alt: "",
        },
      },
    },
    features: {
      miniTag: "ÁREAS DE ATUAÇÃO",
      title: "Soluções jurídicas com profundidade e estratégia",
      subtitle: "",
      imgFeatures: imgFeatures,
      imgDivisor: imgDivisor,
      card1: {
        img: featuresImg1,
        title: "Direito Empresarial",
        slug: "direitoempresarial",
        subtitle:
          " O escritório oferece soluções jurídicas estratégicas para empresas de todos os portes, com foco em contratos, governança societária, disputas complexas e expansão de negócios. Nossa atuação combina técnica, visão prática e experiência em setores regulados, garantindo segurança e competitividade.",
        description: (
          <div>
            O Direito Empresarial é um dos pilares do nosso escritório,
            desenvolvido para apoiar empresas na tomada de decisões seguras e na
            expansão de seus negócios em cenários desafiadores. Nossa prática
            foi moldada por mais de duas décadas de experiência em setores
            estratégicos — da construção civil e infraestrutura à indústria de
            transformação, logística e serviços.
            <br />
            <br />
            Atuamos em todos os aspectos da vida empresarial, oferecendo suporte
            desde a constituição e organização societária até a negociação de
            contratos complexos e a resolução de litígios estratégicos. Essa
            atuação vai além do suporte jurídico tradicional: transformamos
            riscos em clareza e incertezas em estratégia.
            <br />
            <br />
            Nossa prática empresarial é pautada por confidencialidade, visão
            crítica da realidade e compromisso com resultados concretos. Atuamos
            lado a lado com o cliente, integrando o Direito ao processo de
            gestão e ao planejamento corporativo de longo prazo.
            <br />
            <br />
            <br />
            <strong>
              Entre os principais serviços prestados em Direito Empresarial
              estão:
            </strong>
            <br />
            <br />
            - Elaboração, revisão e negociação de contratos nacionais e
            internacionais;
            <br />
            - Estruturação de operações de fusões, aquisições e reestruturações
            societárias;
            <br />
            - Governança corporativa e resolução de conflitos entre sócios;
            <br />
            - Consultoria permanente ou sob demanda em assuntos estratégicos;
            <br />
            - Contencioso empresarial de alta complexidade;
            <br />- Apoio jurídico em projetos de infraestrutura, expansão de
            negócios e relações contratuais de grande porte
          </div>
        ),
        imgModal: imgFeaturesCardModal1,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-briefcase-business-icon lucide-briefcase-business"
          >
            <path d="M12 12h.01" />
            <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            <path d="M22 13a18.15 18.15 0 0 1-20 0" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card2: {
        img: featuresImg2,
        title: "Direito Administrativo",
        slug: "direitoadministrativo",
        subtitle:
          "Com experiência consolidada em licitações, contratos administrativos e defesa de gestores, o escritório alia a vivência prática dentro da Administração Pública à visão estratégica do setor privado. Atuamos com precisão técnica e discrição em temas que envolvem a máquina estatal e seus impactos no setor empresarial.",
        description: (
          <div>
            O Direito Administrativo é uma das áreas em que o escritório possui
            autoridade consolidada, fruto de mais de 14 anos de atuação direta
            dentro da Administração Pública. Essa vivência proporciona uma
            compreensão profunda das engrenagens estatais e de como a legalidade
            se equilibra com a viabilidade prática, conferindo ao escritório uma
            posição diferenciada na assessoria a empresas e gestores.
            <br />
            <br />
            Atuamos em todos os aspectos do Direito Administrativo, combinando
            consultoria preventiva e contencioso estratégico. Essa atuação
            envolve desde a análise de editais e estruturação de contratos até a
            defesa de clientes perante Tribunais de Contas e o Poder Judiciário.
            Nosso papel é oferecer soluções jurídicas seguras, que permitam ao
            cliente se relacionar com o poder público de forma eficaz, ética e
            sustentável.
            <br />
            <br />
            A prática administrativa do escritório é pautada por clareza, sigilo
            e rigor técnico, com foco em reduzir riscos, prevenir litígios e
            assegurar que as decisões de nossos clientes sejam juridicamente
            sólidas.
            <br />
            <br />
            <br />
            <strong>
              Entre os principais serviços prestados em Direito Administrativo
              estão:
            </strong>
            <br />
            <br />
            - Consultoria em licitações e contratos administrativos;
            <br />
            - Impugnações, recursos e defesa em sanções aplicadas pela
            Administração Pública;
            <br />
            - Elaboração e revisão de editais e contratos de grande relevância;
            <br />
            - Pareceres técnicos para gestores públicos e privados;
            <br />
            - Defesa de gestores em ações civis públicas e processos perante
            Tribunais de Contas;
            <br />- Demandas indenizatórias, regulatórias e de nulidade
            contratual contra o Estado.
          </div>
        ),
        imgModal: imgFeaturesCardModal2,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-file-text-icon lucide-file-text"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M10 9H8" />
            <path d="M16 13H8" />
            <path d="M16 17H8" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card3: {
        img: featuresImg3,
        title: "Direito Imobiliário",
        slug: "direitoimobiliario",
        subtitle:
          "O escritório atua na proteção patrimonial e na gestão de riscos de operações imobiliárias, oferecendo suporte em incorporações, contratos, regularizações e litígios. Nossa prática alia precisão técnica e visão estratégica para garantir segurança em negócios e disputas.",
        description: (
          <div>
            O Direito Imobiliário exige atenção rigorosa aos detalhes e clareza
            na condução de operações que envolvem alto valor econômico e impacto
            patrimonial. No escritório, a prática imobiliária foi moldada a
            partir de experiências com construtoras, incorporadoras,
            investidores e adquirentes, permitindo uma visão abrangente de todos
            os lados da relação.
            <br />
            <br />
            Atuamos em todas as fases do ciclo imobiliário, desde a análise
            documental e urbanística até a elaboração de contratos de compra e
            venda, permuta, locação e distrato. Também prestamos suporte em
            incorporações, loteamentos e regularizações fundiárias, oferecendo
            soluções que conciliam segurança jurídica com viabilidade prática.
            <br />
            <br />
            Nosso compromisso é prevenir litígios e proteger o patrimônio do
            cliente, mas, quando o conflito é inevitável, conduzimos disputas
            com rigor técnico e visão estratégica, assegurando consistência nas
            decisões e resultados efetivos.
            <br />
            <br />
            <br />
            <strong>
              Entre os principais serviços prestados em Direito Imobiliário
              estão:
            </strong>
            <br />
            <br />
            - Estruturação jurídica de incorporações e empreendimentos
            imobiliários;
            <br />
            - Due diligence documental, registral e urbanística;
            <br />
            - Elaboração e revisão de contratos de compra e venda, permuta,
            locação e distrato;
            <br />
            - Regularização de imóveis, retificação de registros e usucapião
            (judicial e extrajudicial);
            <br />
            - Ações possessórias, reivindicatórias, revisionais e
            indenizatórias;
            <br />
            - Contencioso envolvendo vícios construtivos, atrasos na entrega e
            cláusulas abusivas;
            <br />- Apoio em inventários, partilhas e divórcios com bens
            imobiliários relevantes
          </div>
        ),
        imgModal: imgFeaturesCardModal3,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-key-icon lucide-key"
          >
            <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" />
            <path d="m21 2-9.6 9.6" />
            <circle cx="7.5" cy="15.5" r="5.5" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card4: {
        img: featuresImg4,
        title: "Direito de Família e Sucessões",
        slug: "direitodefamiliaesucessoes",
        subtitle:
          "O escritório conduz demandas familiares e sucessórias com técnica, sigilo e estratégia, assegurando proteção patrimonial e prevenindo decisões impulsivas. Atuamos em divórcios, alimentos, guarda, inventários e partilhas de alta complexidade.",
        description: (
          <div>
            O Direito de Família e Sucessões exige uma combinação rara: técnica
            refinada, sensibilidade e firmeza estratégica. No escritório,
            tratamos essas demandas como parte de um contexto mais amplo, em que
            decisões jurídicas impactam não apenas vínculos pessoais, mas também
            patrimônios de grande relevância.
            <br />
            <br />
            Atuamos em todas as dimensões do Direito de Família e Sucessões,
            desde divórcios e dissoluções de união estável até disputas
            sucessórias e partilhas de bens em múltiplas jurisdições. Nosso
            compromisso é blindar o cliente contra decisões precipitadas,
            preservando tanto a integridade emocional quanto a posição
            patrimonial em jogo.
            <br />
            <br />
            A prática é conduzida com absoluto sigilo, racionalidade e visão
            estratégica. Entendemos que o cliente precisa de previsibilidade e
            proteção — e não de atalhos jurídicos. Nosso papel é assegurar
            soluções consistentes, que resistam ao tempo e à complexidade das
            relações familiares e sucessórias.
            <br />
            <br />
            <br />
            <strong>
              Entre os principais serviços prestados em Família e Sucessões
              estão:
            </strong>
            <br />
            <br />
            - Divórcios e dissoluções de união estável, com ou sem partilha de
            bens;
            <br />
            - Ações de alimentos, revisões, exonerações e execuções;
            <br />
            - Conflitos relacionados à guarda, convivência e autoridade
            parental;
            <br />
            - Inventários e partilhas, inclusive com bens no exterior ou via
            holdings;
            <br />
            - Disputas sucessórias complexas e de alta sensibilidade
            patrimonial;
            <br />- Planejamento sucessório e reorganização patrimonial
            preventiva.
          </div>
        ),
        imgModal: imgFeaturesCardModal4,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-heart-icon lucide-heart"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card5: {
        img: featuresImg5,
        title: "Direito do Trabalho",
        slug: "direitodotrabalho",
        subtitle:
          "O escritório assessora clientes em imigração, cidadania e mobilidade internacional, com parcerias nos Estados Unidos e Europa. Atuamos em green cards, cidadania italiana e planejamento patrimonial internacional, além de apoiar estrangeiros que desejam investir e residir no Brasil.",
        description: (
          <div>
            O Direito Internacional e a Mobilidade Global são áreas que exigem
            mais do que conhecimento jurídico: pedem planejamento, visão
            estratégica e compreensão das diferenças culturais, normativas e
            patrimoniais que atravessam fronteiras. O escritório atua nesse
            campo com uma abordagem que integra técnica jurídica e sensibilidade
            prática, em parceria com escritórios especializados nos Estados
            Unidos e na Europa.
            <br />
            <br />
            Prestamos assessoria em imigração e cidadania, incluindo a obtenção
            de green cards americanos por vias profissionais e de investimento
            (EB-1, EB-2 NIW, EB-5), bem como análise e consultoria para
            cidadania italiana por direito de sangue, à luz das recentes
            alterações legislativas. Também estruturamos estratégias jurídicas
            para planejamento patrimonial e sucessório internacional,
            assegurando proteção e estabilidade em diferentes jurisdições.
            <br /> <br />
            Além de assessorar brasileiros que buscam oportunidades no exterior,
            o escritório também apoia estrangeiros que desejam constituir
            negócios ou residir no Brasil. Desenvolvemos soluções para a
            abertura de empresas, estruturação societária, regularização
            migratória e obtenção de vistos de residência e trabalho. Essa
            atuação integra o Direito Empresarial e a Mobilidade Internacional,
            oferecendo segurança jurídica a investidores estrangeiros que buscam
            expandir suas atividades no mercado brasileiro.
            <br /> <br />
            Nossa prática é pautada por rigor técnico, sigilo e clareza.
            Tratamos cada projeto de mobilidade como uma decisão de vida e,
            muitas vezes, de legado. O compromisso do escritório é oferecer
            caminhos juridicamente seguros, eliminando incertezas e
            possibilitando que nossos clientes vivam, invistam e prosperem além
            — ou aquém — das fronteiras.
            <br />
            <br />
            <br />
            <strong>
              Entre os principais serviços prestados em Direito Internacional e
              Mobilidade Global estão:
            </strong>
            <br />
            <br />
            - Consultoria para obtenção de green cards americanos (EB-1, EB-2
            NIW, EB-5);
            <br />
            - Assessoria em processos de cidadania italiana por direito de
            sangue;
            <br />
            - Análise de estratégias jurídicas diante das recentes alterações
            legislativas italianas;
            <br />
            - Planejamento sucessório e patrimonial internacional;
            <br />
            - Consultoria em mobilidade global e estruturação de investimentos
            no exterior;
            <br />
            - Apoio jurídico a estrangeiros que desejam investir e constituir
            empresas no Brasil;
            <br />- Regularização migratória, vistos de residência e
            autorizações de trabalho.
          </div>
        ),
        imgModal: imgFeaturesCardModal5,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-user-check-icon lucide-user-check"
          >
            <path d="m16 11 2 2 4-4" />
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card6: {
        img: featuresImg6,
        title: "Imigração e Mobilidade Internacional",
        slug: "imigracaoemobilidadeinternacional",
        subtitle:
          "O escritório atua na defesa de empresas em matéria trabalhista, com foco em prevenção de litígios, gestão de passivos e conformidade. Estruturamos políticas internas, assessoramos negociações coletivas, acompanhamos fiscalizações e conduzimos contencioso estratégico. Também realizamos auditorias/due diligence, treinamentos e ajustes de rotinas (jornadas, teletrabalho, terceirização), alinhando segurança jurídica, eficiência operacional e custos.",
        description: (
          <div>
            A prática trabalhista do escritório é orientada à empresa e integra
            consultoria, negociação e contencioso com um objetivo claro: reduzir
            riscos, controlar passivos e dar previsibilidade às decisões.
            Partimos da compreensão de que o tema trabalhista é um vetor
            sensível de risco jurídico, financeiro e reputacional; por isso,
            priorizamos a prevenção sem abdicar de uma atuação firme quando o
            litígio é inevitável.
            <br /> <br />
            Atuamos em todos os aspectos do Direito do Trabalho empresarial:
            diagnóstico e auditoria, políticas internas e compliance
            trabalhista, negociação coletiva, adequação operacional (jornadas,
            banco de horas, teletrabalho, remuneração variável), relação com
            sindicatos e defesa em processos individuais e coletivos. No campo
            administrativo, acompanhamos fiscalizações, procedimentos no
            Ministério do Trabalho e inquéritos civis no MPT, negociando TACs
            quando estrategicamente indicado.
            <br /> <br />
            Nossa condução é pautada por confidencialidade, pragmatismo e
            precisão técnica. Trabalhamos lado a lado com a gestão e com o
            jurídico interno para padronizar fluxos, treinar lideranças e
            prepostos e estruturar respostas rápidas a incidentes, sempre
            alinhando segurança jurídica e viabilidade operacional.
            <br /> <br /> <br />
            <strong>
              Principais serviços em Direito do Trabalho (empresas):
            </strong>
            <br />
            <br />
            - Diagnóstico e auditoria trabalhista (due diligence): mapeamento de
            riscos e contingências, inclusive em M&A e reestruturações.
            <br />
            - Compliance trabalhista e políticas internas: códigos de conduta,
            canais e investigações internas (assédio, discriminação), ajustes
            alinhados a privacidade/LGPD quando aplicável.
            <br />
            - Adequação de rotinas: jornadas, banco de horas,
            teletrabalho/híbrido, terceirização, contratos com parceiros e
            responsabilidade subsidiária/solidária.
            <br />
            - Remuneração e incentivos: estruturação de PLR, bônus e modelos de
            remuneração variável com segurança jurídica.
            <br />
            - Negociação coletiva e sindical: ACT/CCT, mediações, gestão de
            conflitos e greves.
            <br />
            - Fiscalizações e âmbito administrativo: acompanhamento perante o
            Ministério do Trabalho e o MPT, respostas a autos de infração e
            TACs.
            <br />
            - Contencioso estratégico: defesa em reclamações individuais e ações
            coletivas, gestão de acordos, recursos a TRTs e TST, e
            audiências/perícias.
            <br />
            - Treinamentos: líderes, RH e prepostos; manuais e checklists
            operacionais.
            <br />- Programas de desligamento e acordos: PDV/PDI e acordos
            extrajudiciais quando recomendáveis.
          </div>
        ),
        imgModal: imgFeaturesCardModal6,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-plane-icon lucide-plane"
          >
            <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      moreFeatures: {
        card1: {
          ico: "A_Definir",
          title: "A_Definir",
          subtitle: "A_Definir",
        },
        card2: {
          ico: "A_Definir",
          title: "A_Definir",
          subtitle: "A_Definir",
        },
        card3: {
          ico: "A_Definir",
          title: "A_Definir",
          subtitle: "A_Definir",
        },
      },
    },
    maps: {
      minitag: "LOCALIZAÇÃO",
      title: "Encontre-nos em São Paulo - SP",
      subtitle:
        "Visite nosso endereço e confira no mapa abaixo como chegar facilmente.",
      embedsrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2280.4668516957277!2d-46.6830788!3d-23.5912612!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5745075e00e5%3A0x7d4ab06a613af7e3!2sAv.%20Pres.%20Juscelino%20Kubitschek%2C%201455%20-%20Vila%20Nova%20Concei%C3%A7%C3%A3o%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004543-011!5e1!3m2!1spt-BR!2sbr!4v1753480438590!5m2!1spt-BR!2sbr",
    },
    about: {
      imagem: {
        img: aboutImg1,
        alt: "Imagem profissional de escritório/advogado(a)",
      },
      miniTag: "",
      title: "Trajetória",
      subtitle: "Marcio Gimenez Advocacia",
      labelInstagram: "Siga-nos no Instagram",
      labelFacebook: "Siga-nos no Facebook",
      labelLinkedin: "Siga-nos no LinkedIn",
      labelX: "Siga-nos no X",
      paragraph: (
        <div>
          Com mais de duas décadas de atuação, o escritório se destaca pela
          combinação de rigor técnico e visão estratégica, oferecendo soluções
          jurídicas que aliam experiência administrativa e prática empresarial.
          <br />
          <br />
          O mesmo rigor que orienta nossa prática junto a empresas e
          instituições também se aplica ao atendimento de pessoas físicas.
          Demandas familiares, sucessórias e imobiliárias recebem tratamento
          estratégico e sensível, sempre com foco em preservar patrimônios,
          prevenir litígios e garantir soluções de longo prazo.
          <br />
          <br /> Nosso propósito é transformar complexidade em clareza,
          conduzindo clientes com segurança nas relações legais e operações de
          grande relevância. Atuamos para proteger patrimônios, fortalecer
          empresas e oferecer estabilidade jurídica em um mundo em constante
          transformação.
        </div>
      ),
      buttonModalLabelAbout: "Continuar lendo",
      modal: (
        <p>
          Toda trajetória sólida nasce da combinação entre vivência prática e
          rigor técnico. Foi assim que Marcio Gimenez consolidou sua carreira
          jurídica, marcada pela clareza em meio à complexidade, pela crítica
          refinada da realidade e pela convicção de que o Direito é, antes de
          tudo, um instrumento de estratégia e proteção patrimonial.
          <br />
          <br />
          Durante 14 anos, trabalhou dentro da Administração Pública,
          assessorando prefeitos, secretários e presidentes de câmaras
          legislativas. Exerceu funções como pregoeiro e presidente de comissões
          de licitação, elaborando pareceres técnicos, contratos e editais de
          grande relevância. Nessa vivência, destacou-se pela atuação perante o
          Tribunal de Contas do Estado de São Paulo, conduzindo defesas e
          estruturando estratégias em processos de controle externo que exigiam
          precisão e altivez.
          <br />
          <br />
          Essa experiência na área pública permitiu a compreensão das
          engrenagens administrativas por dentro: como o Estado decide, como
          aplica suas normas e como tensiona a relação entre legalidade,
          interesse público e viabilidade prática. Conhecimento que hoje se
          converte em diferencial estratégico para empresas e clientes que
          precisam atuar em licitações, contratos administrativos ou em demandas
          que envolvem a máquina estatal.
          <br />
          <br />
          Ao lado dessa experiência, desenvolveu uma prática sólida no setor
          privado. Foram mais de duas décadas assessorando empresas de grande
          porte, grupos multinacionais e construtoras em projetos de alta
          complexidade, que incluíram desde obras de infraestrutura e transporte
          público até incorporações imobiliárias e contratos internacionais.
          Essa atuação proporcionou contato direto com setores regulados como
          construção civil, logística, indústria alimentícia, metalurgia e
          empresas de tecnologia, garantindo ao escritório uma visão ampla do
          ambiente corporativo.
          <br />
          <br />
          O mesmo rigor técnico aplicado na assessoria a empresas e instituições
          também orienta o atendimento de pessoas físicas. Questões familiares,
          sucessórias e patrimoniais são conduzidas com sensibilidade e
          estratégia, sempre com foco em preservar bens, prevenir litígios e
          garantir soluções duradouras. Esse equilíbrio assegura que tanto
          indivíduos quanto organizações contem com um suporte jurídico sólido,
          discreto e eficiente.
          <br />
          <br />
          No contencioso, conduziu disputas judiciais de alta complexidade,
          sempre com enfoque estratégico e resultados expressivos em instâncias
          superiores. Na consultoria, elaborou e revisou contratos empresariais
          e administrativos de grande relevância, estruturando operações e
          prevenindo litígios com precisão técnica. Ao longo desse caminho,
          integrou práticas modernas, como programas de compliance corporativo e
          adequação à LGPD, reforçando a conexão entre Direito, governança e
          competitividade.
          <br />
          <br />
          Dessa soma de vivências nasce o Marcio Gimenez Advocacia, um
          escritório moldado para oferecer soluções jurídicas de alto nível,
          unindo a visão institucional adquirida na Administração Pública à
          experiência prática consolidada no setor privado. O escritório traduz
          a consolidação de uma trajetória pautada em rigor técnico, visão
          estratégica e autoridade institucional.
          <br />
          <br />
          Mais do que oferecer respostas jurídicas, o escritório entrega visão
          estratégica, proteção patrimonial e segurança de longo prazo. Porque,
          para nós, o Direito não é mero instrumento de reação: é ferramenta de
          poder, clareza e sofisticação para quem precisa conduzir seus
          interesses com solidez e inteligência.
          <br />
          <br />
        </p>
      ),
      ctaButtonAriaLabel: "Botão para entrar em contato",
      ctaButtonText: "Entre em contato",

      aboutSocial: {
        img: {
          img: aboutSocialImg,
          imgSocial: aboutInstagram,
          alt: `Foto do Instagram do ${infos.name}`,
        },
        miniTag: "A_Definir",
        title: "A_Definir",
        subtitle: "A_Definir",
        paragraph: <p></p>,
        labelInstagram: "Siga-nos no Instagram",
        labelFacebook: "Siga-nos no Facebook",
        labelLinkedin: "Siga-nos no LinkedIn",
        labelX: "Siga-nos no X",
      },
    },
    cta: {
      backgroundImg: ctaWhatsappImgBg,
      miniTag: "FALE CONOSCO",
      title:
        "Enfrentando um problema jurídico? Deixe que cuidamos disso para você!",
      subtitle:
        "Converse com nossa equipe. Estamos prontos para oferecer a orientação jurídica de que você precisa.",
      ctaButtonText: "Entre em contato pelo WhatsApp",
    },
    ctaSecondary: {
      backgroundImg: ctaWhatsappImgBg,
      // miniTag: "FALE CONOSCO",
      title: (
        <h1 className="">
          <span className="text-gray-600">Dúvidas?</span> Entre em contato
          conosco para podermos lhe ajudar,{" "}
          <span className="text-text-gray-600">estamos te esperando.</span>
        </h1>
      ),
      subtitleDireita: (
        <p className="gap-3 flex font-mainFont opacity-60 mt-1 text-gray-600">
          <span>E N T R E </span> E M <span>C O N T A T O</span> V I A
        </p>
      ),
      titleDireita: (
        <h1 className="text-title5 my-3 font-mainFont text-gray-600">
          WhatsApp
        </h1>
      ),
      ctaButtonText: "Falar agora",
    },
    steps: {
      miniTag: "PASSO A PASSO",
      title: "Como funciona nosso atendimento?",
      subtitle: "",
      img: imgSteps,
      alt: "",
      cards: {
        card1: {
          stepNumber: 1,
          cardTitle: "Consulta inicial",
          cardDescription:
            "Realizamos uma reunião para entender seu caso e identificar suas necessidades jurídicas.",
        },
        card2: {
          stepNumber: 2,
          cardTitle: "Análise detalhada",
          cardDescription:
            "Examinamos todos os aspectos do seu caso, revisando documentos e evidências para obter uma visão completa.",
        },
        card3: {
          stepNumber: 3,
          cardTitle: "Elaboração da estratégia",
          cardDescription:
            "Criamos uma estratégia jurídica personalizada para proteger seus interesses de maneira eficaz.",
        },
        card4: {
          stepNumber: 4,
          cardTitle: "Ação legal",
          cardDescription:
            "Iniciamos e conduzimos as ações judiciais ou o serviço contratado, buscando justiça e soluções personalizadas conforme a necessidade do seu caso.",
        },
      },
    },
    blog: {
      miniTag: "BLOG",
      title: "Informação jurídica ao seu alcance",
      subtitle:
        "Acompanhe conteúdos exclusivos para manter-se sempre informado.",
      img: imgSteps,
      blogApiEndpoint:
        "https://public-api.wordpress.com/rest/v1.1/sites/marciogimenez.wordpress.com/posts/",
      labelCards: "Ver mais",
      label: "Clique aqui para ver todas as matérias",
      blogLink: "https://marciogimenez.wordpress.com/",
    },
    faq: {
      miniTag: "TIRE SUAS DÚVIDAS",
      title: "Perguntas Frequentes",
      subtitle: "Confira as perguntas abaixo para esclarecer suas dúvidas. ",
      questions: {
        question1: {
          question: "Como posso contratar seus serviços?",
          answer:
            "Agende sua consulta conosco via WhatsApp e conversaremos sobre suas necessidades e avaliaremos os custos.",
        },
        question2: {
          question: "Qual é o prazo médio para resolução de um caso?",
          answer:
            "O prazo médio varia conforme a complexidade, mas discutiremos uma estimativa durante a consulta inicial.",
        },
        question3: {
          question: "Quais documentos devo levar para a consulta?",
          answer:
            "Traga os documentos relevantes ao seu caso, como contratos, correspondências e registros, além de documentos pessoais e comprovante de residência.",
        },
        question4: {
          question: "Vocês oferecem serviços de consultoria preventiva?",
          answer:
            "Sim, oferecemos consultoria preventiva para evitar problemas futuros e garantir conformidade legal.",
        },
      },
      paragraph: "Clique aqui caso tenha mais dúvidas",
    },
    footer: {
      copyrightLine: ` ${currentYear} - ${infos.name} - Todos os direitos reservados`,
      footerDivulgacaoText: "Gostaria de ter um site como este? Clique aqui",
      midSectionName: "Até mais",
      footerText:
        "Agradecemos sua visita! Esperamos que em breve você se torne nosso cliente e desfrute de todos os benefícios que oferecemos.",
      footerSocialText: "Siga a gente nas redes sociais:",
      footerNavegacaoText: "NAVEGAÇÃO",
    },
    testimonials: {
      miniTag: "A_Definir",
      title: "A_Definir",
      subtitle: "A_Definir",
      images: {
        img1: {
          img: imgTestimonial1,
          alt: "Imagem de feedback",
        },
        img2: {
          img: imgTestimonial2,
          alt: "Imagem de feedback",
        },
        img3: {
          img: imgTestimonial3,
          alt: "Imagem de feedback",
        },
        img4: {
          img: imgTestimonial4,
          alt: "Imagem de feedback",
        },
      },
    },
    trustedBy: {
      title: "A_Definir",
      subtitle: "A_Definir",
      trustedMore: {
        title: "A_Definir",
        subtitle: "A_Definir",
      },
      images: {
        img1: {
          img: { trustedByImg1 },
          alt: "marca Rennova",
        },
        img2: {
          img: { trustedByImg2 },
          alt: "marca Colgate",
        },
        img3: {
          img: { trustedByImg3 },
          alt: "marca dental Cremer",
        },
      },
    },
    numbers: {
      backgroundImg: numbersImgBg,
      number1: 7,
      number1Description: "A_Definir",
      number2: 500,
      number2Description: "A_Definir",
      number3: 1000,
      number3Description: "A_Definir",
    },
    team: {
      title: "A_Definir",
      subtitle: "A_Definir",
      members: {
        member1: {
          img: {
            img: teamMemberImg1,
            alt: "Edison Matos",
          },
          name: "Edison Matos",
          role: "CEO & Diretor de Desenvolvimento",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "https://www.linkedin.com/in/edison-matoss/",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/EdisonMatos",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-globe"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            ),
            link3: "https://edisonmatos.github.io/",
          },
        },
        member2: {
          img: {
            img: teamMemberImg2,
            alt: "Gabriel Adans",
          },
          name: "Gabriel Adans",
          role: "Marketing Outsourcing",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "https://www.linkedin.com/in/gabriel-adans-2bb029227/",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/GabrielAdans",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link3: "https://www.instagram.com/adansgabriel/",
          },
        },
        member3: {
          img: {
            img: teamMemberImg3,
            alt: "Gabriel Souza",
          },
          name: "Gabriel Souza",
          role: "Desenvolvedor Frontend",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: " https://www.linkedin.com/in/gabriel-souza-b9945929a",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/BiellSouza",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link3: " https://www.instagram.com/biel.souza.904",
          },
        },
        member4: {
          img: {
            img: teamMemberImg4,
            alt: "Luiz Felipe",
          },
          name: "Luiz Felipe",
          role: "Designer Ourtsourcing",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "https://www.linkedin.com/in/luiz-felipe-leite-95a246192/",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link2: "https://www.instagram.com/luizleitedesigner/",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                fill="black"
                className=" bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            ),
            link3: "https://wa.me/+556596241854",
          },
        },
      },
    },
    links: {
      instagram: `https://www.instagram.com/${infos.instagramProfile}/`,
      ctaWhatsapp: `https://wa.me/+55${infos.phone.ddd}${infos.phone.firstPart}${infos.phone.secondPart}?text=${infos.whatsappDefaultMessage}`,
      phoneSecundario: `https://wa.me/+55${infos.phoneSecundario.ddd}${infos.phoneSecundario.firstPart}${infos.phoneSecundario.secondPart}?text=${infos.whatsappDefaultMessage}`,
      phoneTerciario: `https://wa.me/+55${infos.phoneTerciario.ddd}${infos.phoneTerciario.firstPart}${infos.phoneTerciario.secondPart}?text=${infos.whatsappDefaultMessage}`,
      facebook: `https://www.facebook.com/${infos.facebookProfile}`,
      x: `https://x.com/${infos.x}`,
      linkedin: `https://www.linkedin.com/in/${infos.linkeDinProfile}`,
    },
    infos: {
      phone: `(${infos.phone.ddd}) ${infos.phone.firstPart}-${infos.phone.secondPart}`,
      phoneSecundario: `(${infos.phoneSecundario.ddd}) ${infos.phoneSecundario.firstPart}-${infos.phoneSecundario.secondPart}`,
      phoneTerciario: `(${infos.phoneTerciario.ddd}) ${infos.phoneTerciario.firstPart}-${infos.phoneTerciario.secondPart}`,
      email: `${infos.email}@${infos.domain}`,
      emailTwo: `${infos.emailTwo}`,
      emailThree: `${infos.emailThree}`,
      emailFour: `${infos.emailFour}`,
      emailFive: `${infos.emailFive}`,
      adress: infos.endereco,
      adressSecundario: infos.enderecoSecundario,
      officeHours: infos.expediente,
      year: currentYear,
      footerexpediente: infos.expediente,
      obsFooter: infos.obs,
      footerNavegacaoText: "NAVEGAÇÃO",
      footerDivulgacaoText:
        "© 2025 – Todos os direitos reservados | Desenvolvido por Paper Street Softwares",
    },
  },
};

export const abstractions = {
  titleModal: <strong>{content.texts.about.title}</strong>,
  subtitleModal: <strong>{content.texts.about.subtitle}</strong>,
};

export default content;
