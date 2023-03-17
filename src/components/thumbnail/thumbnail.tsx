import React from "react";
import { ThubnailProps } from "./thumbnail.props";
import Image from "next/image";
import { image_baseUrl } from "@/helpers/constants";
import ReactStars from "react-stars";
import { useInfoStore } from "@/store";

const Thumbnail = ({ movie, isBig = false }: ThubnailProps) => {
  const { setCurrentMovie, setModal } = useInfoStore();

  const handleCurrentMovie = () => {
    setCurrentMovie(movie);
    setModal(true);
  };

  return (
    <div
      onClick={handleCurrentMovie}
      className={`relative ${
        isBig
          ? "h-[400px] md:h-[550px] min-w-[350px] md:min-w-[450px]"
          : "h-[330px] md:h-[440px] min-w-[200px] md:min-w-[292px]"
      }  cursor-pointer transition duration-200 md:hover:scale-110 ease-out `}
    >
      <Image
        className="object-cover rounded-sm md:rounded"
        src={`${image_baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
        alt={movie.name}
        fill
      />
      <div className="absolute w-full h-full top-0 right-0 left-0 bg-black/40" />

      <div className="absolute bottom-2 min-h-[100px] left-4 right-2">
        <div className="flex items-center space-x-2">
          <ReactStars
            edit={false}
            count={10}
            value={movie.vote_average}
            color1="#fff"
          />
          <p>({movie.vote_count})</p>
        </div>
        <h2 className="text-xl font-bold md:text-2xl">
          {movie?.title || movie?.name}
        </h2>
      </div>
    </div>
  );
};

export default Thumbnail;
