"use client";
import Image from "next/image";

const BigPhoto = ({ photo }) => {
  return (
    <div className="w-full relative">
      <div className="relative w-full">
        <Image src={photo} alt="visuals" priority className="w-full" />
      </div>
    </div>
  );
};

export default BigPhoto;
