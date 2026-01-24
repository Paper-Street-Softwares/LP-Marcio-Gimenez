import PropTypes from 'prop-types'
import MotionDivDownToUp from '../animation/MotionDivDownToUp'
import Button from '../interactives/Button'

export default function FeatureImgOnBgCardButton({
  bgImg,
  title,
  description,
  buttonLabel,
  buttonLink, // rota
  buttonColor,
  onClick,
}) {
  FeatureImgOnBgCardButton.propTypes = {
    bgImg: PropTypes.any,
    title: PropTypes.any,
    description: PropTypes.any,
    buttonLabel: PropTypes.string,
    buttonLink: PropTypes.string,
    buttonColor: PropTypes.any,
    onClick: PropTypes.func,
  }

  return (
    <MotionDivDownToUp>
      <div className="w-[290px] phone2:w-[300px] phone3:w-[350px] tablet1:w-[400px] tablet2:w-[222px] font-mainFont flex flex-col desktop1:max-w-[350px] desktop1:w-[260px] desktop2:w-[300px] desktop3:w-[400px] h-[527px] shadow-custom-opacity shadow-shadowBlogs/0 bg-bgSectionLight border rounded-sm p-[10px] ">
        {/* Imagem */}
        <div
          style={{ backgroundImage: `url(${bgImg})` }}
          className="w-full h-[400px] tablet1:h-[400px] tablet2:h-[300px] desktop1:h-[400px] bg-cover bg-center flex justify-center items-center overflow-hidden"
        >
          {/* <img src={bgImg} alt={title} className="w-full object-cover" /> */}
        </div>

        {/* Conteúdo restante: título, descrição e botão */}
        <div className="flex flex-col flex-1 mt-4 justify-between">
          {/* Título */}
          <h1
            className="text-title1 text-gray-600 leading-[25px] mb-[12px] font-bold"
            title={title}
          >
            {title}
          </h1>

          {/* Subtítulo/descrição */}
          <h2
            className="text-paragraph2 font-secondFont desktop2:text-paragraph2 text-gray-600 leading-[18px] desktop1:leading-[21px] opacity-80 overflow-hidden flex-1 line-clamp-2"
            title={description}
          >
            {description}
          </h2>

          {/* Botão */}
          <div className="mt-4">
            <Button
              removeAnchor={false}
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
      </div>
    </MotionDivDownToUp>
  )
}
