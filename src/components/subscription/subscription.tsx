import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";
import React from "react";
import { SubscribtionProps } from "./subscription.props";
import PlanCard from "../plan-card/plan-card";

const Subscription = ({ products }: SubscribtionProps) => {
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
          {products.map(product => (
            <PlanCard key={product.id} product={product} />
          )).reverse()}

        </div>
      </div>
    </div>
  );
};

export default Subscription;
