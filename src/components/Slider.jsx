/* eslint-disable react/prop-types */
import Slider from "react-slick";
import MovieCard from "./MovieCard";
import CardSekeleton from "../Skeletons/CardSekeleton";
const CardSlider = ({ data, settings, isLoading }) => {
  if (isLoading)
    return (
      <Slider {...settings}>
        {Array(10)
          .fill(0, 0)
          .map((card, i) => (
            <CardSekeleton key={i} />
          ))}
      </Slider>
    );
  return (
    <div>
      <Slider {...settings}>
        {data?.results.map((card) => (
          <MovieCard key={card.id} card={card} />
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
