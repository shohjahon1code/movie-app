import React, { useEffect, useState } from "react";
import { HeroProps } from "./hero.props";
import { IMovie } from "@/interfaces/app.interface";
import Image from "next/image";
import { image_baseUrl } from "@/helpers/constants";
import { TbPlayerPlay } from "react-icons/tb";
import ReactStars from "react-stars";
import { useInfoStore } from "@/store";

const Hero = ({ trending }: HeroProps): JSX.Element => {
  const [movie, setMovie] = useState<IMovie>({} as IMovie);
  const { setModal, setCurrentMovie } = useInfoStore();

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * trending.length);
    const randomMovie = trending[randomNumber];
    setMovie(randomMovie);
  }, [trending]);

  const handleCurrentmovie = () => {
    setCurrentMovie(movie);
    setModal(true);
  };

  return (
    <div className="flex flex-col space-y-2 py-20 md:space-y-4 lg: h-[65vh] lg:pb-12 lg:center">
      <div className="absolute -z-10 top-0 left-0 h-[95vh] w-full">
        <Image
          className="object-cover "
          src={`${image_baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt={movie.name}
          fill
        />
      </div>
      <div className="py-[4px] px-[8px] text-center rounded-bl-[8px] rounded-tr-[8px] bg-[#e5e5e5]/50 w-[111px]">
        {movie.media_type}
      </div>
      <div className="flex items-center space-x-2">
        <ReactStars
          edit={false}
          count={10}
          value={movie.vote_average}
          color1="#fff"
        />
        <p>({movie.vote_count})</p>
      </div>
      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        {movie?.title || movie?.name}
      </h1>
      <p className="max-w-xs md:max-w-lg text-shadow-md lg:max-w-2xl text-xs md:text-lg lg:text-2xl">
        {movie?.overview?.slice(0, 100)}...
      </p>
      <div>
        <button
          onClick={handleCurrentmovie}
          className="bg-white/40 flex items-center space-x-2 hover:text-white/50 justify-center text-black font-bold rounded-full w-[200px] h-[56px] border-red-500"
        >
          <TbPlayerPlay className="h-5 w-5 md:h-8 md:w-8" />
          Watch now
        </button>
      </div>
    </div>
  );
};

export default Hero;
