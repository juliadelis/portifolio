import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353f] border-l-transparent border-b-transparent border-r-transparent text-white">
      {" "}
      <div className="container p-12 flex justify-between">
        <Image
          className="rounded mb-4 mr-8 lg:mr-0 lg:mb-0"
          src="/images/jdelis.svg"
          width={100}
          height={100}
        />
        <p className="text-slate-600">All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
