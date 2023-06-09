import React from "react";

import { CardData } from "../assets/Data/CardArray";
const Cards = (props) => {
  return (
    <div className="h-max px-[10%] py-[5%] text-[16px] bg-white">
      <div className="mb-20">
        <p className="uppercase text-[#8DC640] ">Process</p>
        <p className="uppercase text-[55px] font-thin font-bodyText">
          {props.heading}
        </p>
        <p className="text-[#7C7C7C]">
          A step by step guide to the home buying process.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-12 ">
        {CardData.map((data, index) => {
          return (
            <div key={index} className="relative shadow-md">
              <img src={data.img} alt="img" className=" h-[480px] w-full " />
              <div className="absolute text-white  -mt-28  flex flex-row justify-between items-center  pl-10 w-full ">
                <div className="w-2/3">
                  <p className="text-[30px] font-bodyText">{data.heading}</p>
                  <p className="text-[13px] font-nunito">{data.content}</p>
                </div>
                <div className="w-1/3  flex items-center justify-center">
                  <div className="h-14 w-14 border-2 border-white flex items-center justify-center ">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      height="2em"
                      width="9em"
                      {...props}
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
