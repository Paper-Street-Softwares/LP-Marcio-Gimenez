import content, { infos } from '../../content/content'
import XFooter from '../sectionElements/footer/XFooter.jsx'
import SectionArea from '../sectionElements/SectionArea.jsx'
import ObsFooter from '../sectionElements/footer/ObsFooter.jsx'
import LogoFooter from '../sectionElements/footer/LogoFooter.jsx'
import SectionWrapper from '../sectionElements/SectionWrapper.jsx'
import MotionDivDownToUp from '../animation/MotionDivDownToUp.jsx'
import PhoneFooter from '../sectionElements/footer/PhoneFooter.jsx'
import EmailFooter from '../sectionElements/footer/EmailFooter.jsx'
import AdressFooter from '../sectionElements/footer/AdressFooter.jsx'
import MidTextFooter from '../sectionElements/footer/MidTextFooter.jsx'
import FacebookFooter from '../sectionElements/footer/FacebookFooter.jsx'
import LinkedinFooter from '../sectionElements/footer/LinkedinFooter.jsx'
import PhoneSecundario from '../sectionElements/footer/PhoneSecundario.jsx'
import CopyrightFooter from '../sectionElements/footer/CopyrightFooter.jsx'
import InstagramFooter from '../sectionElements/footer/InstagramFooter.jsx'
import ParagrapfFooter from '../sectionElements/footer/ParagrapfFooter.jsx'
import ExpedienteFooter from '../sectionElements/footer/ExpedienteFooter.jsx'
import AdressSecundarioFooter from '../sectionElements/footer/AdressSecundario.jsx'
import NavegationTextFooter from '../sectionElements/footer/NavegationTextFooter.jsx'
import LinksNavegationFooter from '../sectionElements/footer/LinksNavegationFooter.jsx'
import PhoneTerciario from '../sectionElements/footer/PhoneTerciario.jsx'
import TikTokFooter from '../sectionElements/footer/TikTokFooter.jsx'
import ExpedienteSecondFooter from '../sectionElements/footer/ExpedienteSecondFooter.jsx'
import InstagramSecundaryFooter from '../sectionElements/footer/InstagramSecundaryFooter.jsx'
import Button from '../../components/interactives/Button.jsx'
import { useNavigate } from 'react-router-dom'

export default function FooterSocial({
  colorMode,
  addres,
  obs,
  instagram,
  facebook,
  linkedin,
  x,
  tiktok,
  addresSecundario,
  phoneSecundario,
  phoneTerciario,
  expedientesecond,
  instagramSecundary,
  bgButton,
  textButton,
}) {
  const navigate = useNavigate()

  // Define estilos com base no colorMode
  let footerBackground = ''
  let textColor = ''

  switch (colorMode) {
    case 'dark':
      footerBackground = 'bg-bgFixedDark'
      textColor = 'text-white'
      bgButton = 'bg-primary'
      textButton = 'text-white'
      break
    case 'light':
      footerBackground = 'bg-white'
      textColor = 'text-black'
      bgButton = 'bg-buttonColor'
      textButton = 'text-white'

      break
    default:
      footerBackground = 'bg-bgSectionDark'
      // "bg-gradient-to-b from-bgSectionDark to-bgSectionDark bg-cover bg-center bg-no-repeat";
      textColor = 'text-white'
      bgButton = 'bg-white'
      textButton = 'text-black'
      break
  }

  return (
    <footer
      className={`full gap-y-[42px] font-secondFont text-left text-paragraph4 flex flex-col justify-between items-center ${footerBackground} ${textColor}`}
    >
      <SectionArea paddingtop={true} paddingbot={false} className="pb-[23px]">
        <SectionWrapper className="gap-[42px]">
          {/* <div className="w-full max-w-[1215px] flex flex-col gap-y-[80px] desktop1:flex-row desktop1:justify-between">
            <div className="flex flex-col gap-y-[16px] desktop1:w-[290px] text-paragraph3">
              <LogoFooter />
              <PhoneFooter colorMode={colorMode} />
              {phoneSecundario && <PhoneSecundario />}
              {phoneTerciario && <PhoneTerciario />}
              <EmailFooter />
              {addres && <AdressFooter />}
              {addresSecundario && <AdressSecundarioFooter />}
              <ExpedienteFooter />
              {expedientesecond && <ExpedienteSecondFooter />}
              {obs && <ObsFooter />}
            </div>

            <div className="flex flex-col gap-y-[16px] desktop1:w-[290px]">
              <MidTextFooter />
              <ParagrapfFooter />
              <MotionDivDownToUp>
                <p className="opacity-90">{content.texts.footerSocialText}</p>
                <div className="mt-2 opacity-90">
                  <div className="flex gap-[10px] items-center">
                    {instagram && <InstagramFooter />}
                    {instagramSecundary && <InstagramSecundaryFooter />}
                    {tiktok && <TikTokFooter />}
                    {facebook && <FacebookFooter />}
                    {x && <XFooter />}
                    {linkedin && <LinkedinFooter />}
                    <Button
                      aria-label="Política de Privacidade"
                      label="Política de Privacidade"
                      onClick={() => {
                        navigate("/privacidade");
                        window.scrollTo(0, 0);
                      }}
                      animation
                      className="w-[100%]"
                      // icon={<FaWhatsapp size={24} color="black" />}
                      colorMode={colorMode}
                      color="bg-white"
                      textclassName="text-secondary"
                    />
                  </div>
                </div>
              </MotionDivDownToUp>
            </div>

            <div className="flex flex-col gap-y-[16px] desktop1:w-[290px]">
              <NavegationTextFooter />
              <LinksNavegationFooter />
            </div>
          </div> */}
          <div className="flex flex-col items-center tablet1:items-start tablet1:flex-row gap-8 justify-evenly w-full">
            <div className="flex flex-col gap-3">
              <h1>Nossas Redes Sociais</h1>
              <div className="flex gap-5">
                <a
                  href={content.texts.links.instagram}
                  target="_blank"
                  aria-label="Link para o Instagram"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
                    alt="Logo do Instagram"
                    className="w-[50px] rounded-md"
                    width={50}
                    height={50}
                  />
                </a>
                <a
                  href={content.texts.links.linkedin}
                  target="_blank"
                  aria-label="Link para o LinkedIn"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bGEl9v47XieEtHyj0TqTr1tOXJmib-KHtw&s"
                    alt="Logo do LinkedIn"
                    className="w-[50px] rounded-md bg-white"
                    width={50}
                    height={50}
                  />
                </a>
                <a
                  href={content.texts.links.facebook}
                  target="_blank"
                  aria-label="Link para o Facebook"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/256/124/124010.png"
                    alt="Logo do Facebook"
                    className="w-[50px] rounded-md bg-white"
                    width={50}
                    height={50}
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h1> Informação</h1>
              <div className="flex flex-col">
                <input
                  type="text"
                  aria-label="E-mail"
                  placeholder="E-mail"
                  className="w-[290px] bg-primary/20 px-2 h-10"
                />
                <Button
                  label="Inscrever-se"
                  className="w-full mt-2"
                  size="small"
                  buttonLink="mailto:contato@marciogimenez.com.br"
                  color={`${bgButton}`}
                  labelColor={`${textButton}`}
                />
                {/* <button className="bg-bgSectionDark w-[290px] text-white py-2 text-paragraph2">
                  <a href="mailto:contato@marciogimenez.com.br">INSCREVER-SE</a>
                </button> */}
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              navigate('/privacidade')
              window.scrollTo(0, 0)
            }}
            className="bg-primary/30 py-1 px-4 rounded-sm scale-100 hover:scale-95 cursor-pointer transition-all duration-500"
          >
            Política de Privacidade
          </button>
          {/* <Button
            aria-label="Política de Privacidade"
            label="Política de Privacidade"
            onClick={() => {
              navigate("/privacidade");
              window.scrollTo(0, 0);
            }}
            animation
            className="w-[100%]"
            colorMode={colorMode}
            color="bg-primary/30"
            textclassName="text-secondary"
          /> */}
          <CopyrightFooter />
        </SectionWrapper>
      </SectionArea>
    </footer>
  )
}
