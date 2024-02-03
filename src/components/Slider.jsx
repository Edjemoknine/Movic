/* eslint-disable react/prop-types */
import Slider from "react-slick";
import MovieCard from "./MovieCard";
import CardSekeleton from "../Skeletons/CardSekeleton";
import { ChevronLeft, ChevronRight } from "lucide-react";
export function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="hover:bg-black/50 opacity-50 hover:opacity-100 group hover:scale-105 border-gray-400 duration-300 hover:border-none"
      style={{
        ...style,

        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        left: "0px",
        zIndex: 10,
        height: "50%",
        width: "60px",
        // boxShadow: "10px 10px 100vh rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <ChevronLeft size={50} className="group-hover:scale-110" />
    </div>
  );
}
export function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="hover:bg-black/50  group hover:scale-105 border-gray-400 duration-300 hover:border-none"
      style={{
        ...style,
        cursor: "pointer",
        height: "50%",
        width: "80px",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        right: "0px",
        top: "50%",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}
    >
      <ChevronRight size={50} className="group-hover:scale-110" />
    </div>
  );
}

const Cardsettings = {
  dots: false,
  infinite: true,
  lazy: true,
  speed: 2000,
  slidesToShow: 6,
  slidesToScroll: 6,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const CardSlider = ({ data, settings, isLoading }) => {
  // console.log(sliderRef.current.slickNext());

  if (isLoading)
    // {...settings}
    return (
      <div className="group">
        <Slider {...Cardsettings}>
          {Array(10)
            .fill(0, 0)
            .map((card, i) => (
              <CardSekeleton key={i} />
            ))}
        </Slider>
      </div>
    );
  return (
    <div className="relative">
      {/* <button
        // onClick={() => sliderRef.current.slickPrev()}
        className="w-10 h-10 z-10 absolute top-1/2 translate-y-1/2 left-0 flex justify-center items-center cursor-pointer bg-red-600 text-white font-semibold text-xl"
      >
        {"<"}
      </button>
      <button
        // onClick={() => sliderRef.current.slickNext()}
        className="w-10 h-10 z-10 absolute top-1/2 translate-y-1/2  right-0 border border-red-500 flex justify-center items-center cursor-pointer bg-red-500 text-white font-semibold text-xl"
      >
        {">"}
      </button> */}

      <Slider {...Cardsettings}>
        {data?.results.map((card) => (
          <MovieCard key={card.id} card={card} />
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
