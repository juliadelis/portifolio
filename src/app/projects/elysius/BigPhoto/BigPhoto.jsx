"use client";
import Image from "next/image";

const BigPhoto = ({ photo, top, right, bottom, left, maxWidth = false }) => {
  const positionStyles = {};
  if (top !== undefined) positionStyles.top = top;
  if (right !== undefined) positionStyles.right = right;
  if (bottom !== undefined) positionStyles.bottom = bottom;
  if (left !== undefined) positionStyles.left = left;

  return (
    <div
      className={`
        w-full relative
        xl:max-w-[1680px] xl:mx-auto 
      `}>
      <div className="relative w-full" style={positionStyles}>
        <Image src={photo} alt="visuals" priority className="w-full" />
      </div>
    </div>
  );
};

export default BigPhoto;
