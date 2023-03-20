import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";
import React from "react";
import { FcVip } from 'react-icons/fc';
import { AiOutlineHourglass, AiOutlineVideoCameraAdd } from 'react-icons/ai';

const Subscription = () => {
  const { logOut } = useAuth();
  return (
    <div className="min-h-screen">
      <div className="border-b-2 border-gray-300/20 h-[10vh] flex justify-between items-center px-4 md:px-10">
        <Image
          src={"/logo.svg"}
          alt="Logo"
          width={56}
          height={56}
          className="cursor-pointer object-contain"
        />
        <div onClick={logOut} className="cursor-pointer hover:underline">
          Logout
        </div>
      </div>
      <div className="flex flex-col space-y-4 text-center pt-5">
        <h2 className="text-2xl md:text-5xl text-shadow-sm">
          Flexible pricing for teams of any size.
        </h2>
        <p className="text-xl text-shadow-sm">
          relaxing with watching your favourite films and series
        </p>
      </div>
      <div className="flex justify-center items-center py-20">
        <div className="md:px-4 md:grid md:grid-cols-4  lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
          {/* Card */}
          <div className="max-w-sm cursor-pointer bg-white/20 px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="mb-3 text-xl font-bold text-[#e10856]">Starter</h3>
            <div className="relative">
              {/* eslint-disable-next-line */}
              <img
                src="https://rb.gy/ngeg6r"
                alt="img"
                className="w-full rounded-lg"
              />
              <p className="absolute top-0 bg-black/90 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tr-lg">
                $10
              </p>
              <div className="absolute w-full h-full top-0 right-0 left-0 bg-black/20" />
            </div>
            <div className="border-[1px] border-white/20 mt-4" />
            <button className="mt-4 w-full py-4 rounded hover:opacity-80 bg-[#e10856]">BUY PLAN</button>
            <div className="my-4 flex flex-col space-y-2">
              <div className="flex space-x-4">
                <FcVip className="w-7 h-7" />
                <p>Vip plan</p>
              </div>
              <div className="flex space-x-4">
                <AiOutlineHourglass className="w-7 h-7" />
                <p>100 hour video</p>
              </div>
              <div className="flex space-x-4">
                <AiOutlineVideoCameraAdd className="w-7 h-7" />
                <p>HD format</p>
              </div>
            </div>
          </div>
          <div className="max-w-sm cursor-pointer bg-white/20 px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="mb-3 text-xl font-bold text-[#e10856]">Starter</h3>
            <div className="relative">
              {/* eslint-disable-next-line */}
              <img
                src="https://rb.gy/ujelox"
                alt="img"
                className="w-full rounded-lg"
              />
              <p className="absolute top-0 bg-black/90 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tr-lg">
                $10
              </p>
              <div className="absolute w-full h-full top-0 right-0 left-0 bg-black/20" />
            </div>
            <div className="border-[1px] border-white/20 mt-4" />
            <button className="mt-4 w-full py-4 rounded hover:opacity-80 bg-[#e10856]">BUY PLAN</button>
            <div className="my-4 flex flex-col space-y-2">
              <div className="flex space-x-4">
                <FcVip className="w-7 h-7" />
                <p>Vip plan</p>
              </div>
              <div className="flex space-x-4">
                <AiOutlineHourglass className="w-7 h-7" />
                <p>100 hour video</p>
              </div>
              <div className="flex space-x-4">
                <AiOutlineVideoCameraAdd className="w-7 h-7" />
                <p>HD format</p>
              </div>
            </div>
          </div>
          <div className="max-w-sm cursor-pointer bg-white/20 px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="mb-3 text-xl font-bold text-[#e10856]">Starter</h3>
            <div className="relative">
              {/* eslint-disable-next-line */}
              <img
                src="https://rb.gy/qvu95x"
                alt="img"
                className="w-full rounded-lg"
              />
              <p className="absolute top-0 bg-black/90 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tr-lg">
                $10
              </p>
              <div className="absolute w-full h-full top-0 right-0 left-0 bg-black/20" />
            </div>
            <div className="border-[1px] border-white/20 mt-4" />
            <button className="mt-4 w-full py-4 rounded hover:opacity-80 bg-[#e10856]">BUY PLAN</button>
            <div className="my-4 flex flex-col space-y-2">
              <div className="flex space-x-4">
                <FcVip className="w-7 h-7" />
                <p>Vip plan</p>
              </div>
              <div className="flex space-x-4">
                <AiOutlineHourglass className="w-7 h-7" />
                <p>100 hour video</p>
              </div>
              <div className="flex space-x-4">
                <AiOutlineVideoCameraAdd className="w-7 h-7" />
                <p>HD format</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
