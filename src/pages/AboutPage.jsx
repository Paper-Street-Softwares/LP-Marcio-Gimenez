import SectionArea from '../components/sectionElements/SectionArea'
import About from '../components/sections/About'
import NavbarSocial from '../components/sections/NavbarSocial'

export default function AboutPage() {
  return (
    <>
      <NavbarSocial />
      <SectionArea className="pt-[100px] tablet1:pt-[200px]" paddingbot={false}>
        <About />
      </SectionArea>

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
