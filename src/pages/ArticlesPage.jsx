import SectionArea from '../components/sectionElements/SectionArea'
import BlogPosts from '../components/sections/BlogPosts'
import NavbarSocial from '../components/sections/NavbarSocial'

export default function ArticlesPage() {
  return (
    <>
      <NavbarSocial />
      <div className="pt-[100px] tablet1:pt-[200px] desktop1:pt-[100px] bg-bgSectionDark" />
      <BlogPosts />

      <button className="bg-bgSectionDark fixed border-white border-2 bottom-2 left-8 p-4 rounded-full hover:scale-105 duration-300 transition-all">
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
