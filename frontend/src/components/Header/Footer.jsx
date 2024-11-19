import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative w-full h-auto p-5 bg-theme flex flex-col justify-center items-center z-1000">
      <div className="uppercase m-2 font-light flex justify-evenly items-center w-full md:flex-row flex-col gap-3">
        <div className="flex justify-evenly items-center flex-row orbitron font-semibold gap-10">
          <div className=""><Link to = '/'>
          Home_
          </Link>
          </div>
          <div className=""><Link to = '/about'>
          Author_
          </Link>
          </div>
          <div className="">
            <Link to = '/project'>
            Racks_</Link></div>
        </div>
        <div className="font-extrabold text-lg">Saksham agarwal</div>
        <div className="font-semibold">sakshamagarwalm2@gmail.com</div>
      </div>
      <hr className="w-1/2 bg-slate-300/30" />
      <div className="uppercase text-slate-300 mt-2 font-light">
      All rights reserved © 2024 hkrm
      </div>
    </div>
  );
};

export default Footer;
