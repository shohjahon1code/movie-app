import React, { useRef, useState } from "react";
import { RowProps } from "./row.props";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import Thumbnail from "../thumbnail/thumbnail";

const Row = ({ title, movies, isBig = false }: RowProps) => {
  const [moved, setMoved] = useState<boolean>(false);
  const carauselRef = useRef<HTMLDivElement>(null);

  const handleClick = (direction: "left" | "right") => {
    setMoved(true);
    if (carauselRef.current) {
      const { clientWidth, scrollLeft } = carauselRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      carauselRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
      if (direction === "left" && scrollTo === 0) {
        setMoved(false);
      }
    }
  };

  return (
    <div className="md:h-[500px]space-y-1 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm md:text-2xl font-semibold text-[#e5e5e5] hover:text-white transition duration-200">
        {title}
      </h2>
      {/* Carusel */}
      <div className="group relative md:ml-2">
        <AiFillCaretLeft
          onClick={() => handleClick("left")}
          className={`leftArrow ${!moved && "hidden"}`}
        />
        <div
          ref={carauselRef}
          className={`flex scrollbar-hide overflow-hidden items-center ${
            !isBig && "space-x-1 md:space-x-4"
          }  overflow-x-scroll `}
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} isBig={isBig} />
          ))}
        </div>
        <AiFillCaretRight
          onClick={() => handleClick("right")}
          className={`rightArrow`}
        />
      </div>
    </div>
  );
};

export default Row;
