import content from "../../content/content";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import BlogButton from "../interactives/BlogButton";
import Button from "../interactives/BlogButton";

export default function WordPressBlogCard({ img, title, subtitle, link }) {
  return (
    <div>
      <MotionDivDownToUp>
        <div
          id="cardBlog"
          className="w-[290px] phone2:w-[300px] phone3:w-[350px] tablet1:w-[400px] tablet2:w-[210px] font-mainFont flex flex-col desktop1:max-w-[300px] desktop1:w-[280px] desktop3:max-w-[375px] shadow-custom-opacity shadow-shadowBlogs/0 bg-bgSectionLight rounded-sm p-[20px] border"
        >
          <div className="w-full max-h-[220px] tablet1:h-[300px] tablet2:h-auto flex justify-center items-center overflow-hidden">
            <div className="w-full">{img}</div>
          </div>
          <h1
            className="mt-4 text-title1 text-gray-600 leading-[25px] font-medium mb-[12px]"
            title="blogTitle"
          >
            {title}
          </h1>
          {/* <h2
            className="text-paragraph2 opacity-80 font-secondFont desktop2:text-paragraph3 mb-[32px] text-gray-600 leading-[18px] desktop1:leading-[21px]  "
            title="blogSubtitle"
          >
            {subtitle}
          </h2> */}
          <div className="flex ">
            <Button
              removeAnchor={true}
              color="bg-buttonColor"
              label={content.texts.blog.labelCards}
              buttonLink={link}
              className="text-labelButtons"
              size="small"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-corner-down-right"
                >
                  <polyline points="15 10 20 15 15 20" />
                  <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                </svg>
              }
            />
          </div>
        </div>
      </MotionDivDownToUp>
    </div>
  );
}
