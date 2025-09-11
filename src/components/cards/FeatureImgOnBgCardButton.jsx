import PropTypes from "prop-types";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import Button from "../interactives/Button";

export default function FeatureImgOnBgCardButton(props) {
  const {
    bgImg,
    title,
    description,
    buttonLabel,
    buttonLink,
    onClick,
    buttonColor,
  } = props;

  FeatureImgOnBgCardButton.propTypes = {
    bgImg: PropTypes.any,
    title: PropTypes.any,
    description: PropTypes.any,
    buttonLabel: PropTypes.string,
    buttonLink: PropTypes.string,
    buttonColor: PropTypes.any,
    onClick: PropTypes.func,
  };

  return (
    <MotionDivDownToUp>
      <div
        id="featureCard"
        className="w-[290px] phone2:w-[300px] phone3:w-[350px] tablet1:w-[400px] tablet2:w-[210px] font-mainFont flex flex-col desktop1:max-w-[300px] desktop1:w-[280px] desktop3:max-w-[375px] shadow-custom-opacity shadow-shadowBlogs/5 bg-bgSectionLight border rounded-sm p-[20px] mb-4"
      >
        {/* Imagem */}
        <div className="w-full max-h-[220px] tablet1:h-[300px] tablet2:h-auto flex justify-center items-center overflow-hidden">
          <img src={bgImg} alt={title} className="w-full object-cover" />
        </div>

        {/* Título */}
        <h1
          className="mt-4 text-title1 text-gray-600 leading-[25px]  mb-[12px] font-bold"
          title={title}
        >
          {title}
        </h1>

        {/* Subtítulo/descrição */}
        <h2
          className="text-paragraph2 desktop2:text-paragraph2 mb-[32px] text-gray-600 leading-[18px] desktop1:leading-[21px]"
          title={description}
        >
          {description}
        </h2>

        {/* Botão */}
        <div className="flex">
          <Button
            removeAnchor={true}
            label={buttonLabel}
            buttonLink={buttonLink}
            color={buttonColor}
            size="small"
            onClick={onClick}
            className="text-white"
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
  );
}
