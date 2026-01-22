import AboutCompleto from '../components/sections/AboutCompleto'
import FormAndLocation from '../components/sections/FormAndLocation'
import FooterSocial from '../components/sections/FooterSocial'

export default function Trajetoria() {
  return (
    <>
      <div className="bg-bgSectionDark h-48 flex items-center justify-center">
        <h1 className="text-primary text-title6 font-mainFont ">TRAJETÓRIA</h1>
      </div>
      <AboutCompleto />
      <FooterSocial
        addresSecundario={false}
        phoneTerciario={false}
        expedientesecond={false}
        addres={true}
      />

      <button className="bg-bgSectionDark fixed bottom-2 left-8 p-4 rounded-full hover:scale-105 duration-300 transition-all">
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-arrow-left-icon lucide-arrow-left"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
        </a>
      </button>
    </>
  )
}
