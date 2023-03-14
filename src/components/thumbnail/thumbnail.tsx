import React from "react";
import { ThubnailProps } from "./thumbnail.props";
import Image from "next/image";
import { image_baseUrl } from "@/helpers/constants";

const Thumbnail = ({ movie }: ThubnailProps) => {
  return (
    <div className="relative h-[330px] min-w-[200px] cursor-pointer transition duration-200 md:hover:scale-110 ease-out md:h-[440px] md:min-w-[292px]">
      <Image
        className="object-cover rounded-sm md:rounded"
        src={`${image_baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
        alt={movie.name}
        fill
      />
    </div>
  );
};

export default Thumbnail;
