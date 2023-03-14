import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { TbBellMinusFilled } from "react-icons/tb";
import Link from "next/link";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScrolled() {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScrolled);
    return () => window.removeEventListener("scroll", handleScrolled);
  }, []);

  return (
    <header className={`${scrolled && "bg-red-500 shadow-lg"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src={"/logo.svg"}
          alt="Logo"
          width={56}
          height={56}
          className="cursor-pointer object-contain"
        />
        <ul className=" md:flex space-x-10 hidden">
          <li className="navlink">
            <Image src={"/home.svg"} alt="home" width={32} height={32} />
          </li>
          <li className="navlink">
            <Image src={"/films.svg"} alt="films" width={32} height={32} />
          </li>
          <li className="navlink">
            <Image src={"/series.svg"} alt="series" width={32} height={32} />
          </li>
          <li className="navlink">
            <Image src={"/starred.svg"} alt="starred" width={32} height={32} />
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <AiOutlineSearch className="h-6 w-6 cursor-pointer hover:bg-stone-500  rounded-full transition-all" />
        <p className="hidden lg:inline">Kids</p>
        <TbBellMinusFilled className="h-6 w-6 cursor-pointer hover:bg-stone-500  rounded-full transition-all" />
        <Link href={"/account"}>
          <VscAccount className="h-6 w-6 cursor-pointer hover:bg-stone-500  rounded-full transition-all" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
