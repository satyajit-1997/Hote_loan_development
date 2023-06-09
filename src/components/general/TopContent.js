import React from "react";
import DiamondLogo from "../assets/logo/diamond.png";

const TopContent = (props) => {
  return (
    <div
      className={`font-nunito h-${props.height} bg-[url("https://satyajitpradhan.xyz/images/banner.jpg")] bg-cover  py-[250px] uppercase text-white  flex flex-col justify-center  items-center `}
      style={{
        backgroundImage: `url("https://satyajitpradhan.xyz/images/banner.jpg")`,
      }}
    >
      <p className="text-[32px] tracking-wider font-bodyText">{props.topHeading}</p>
      <h1 className="text-[70px] tracking-wider font-bodyText">{props.mainHeading}</h1>
      {/* <div className="">jxsxnsjnxj</div> */}
      <div className="flex flex-row justify-center items-center text-[32px] font-bodyText gap-5">
        <img src={DiamondLogo} alt="#" />
        <p className="border-t  tracking-widest  border-b border-white ">{props.bottomHeading}</p>
        <img src={DiamondLogo} alt="#"  />
      </div>
      {/* <div className="border-y border-white my-4"></div> */}
    </div>
  );
};

export default TopContent;
