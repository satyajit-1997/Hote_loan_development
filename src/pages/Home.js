import React from "react";
import { useNavigate } from "react-router-dom";
import TopContent from "../components/general/TopContent";
import Cards from "../components/general/Cards";
import ContactUs from "../components/general/ContactUs";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="-mt-[100px]">
   <TopContent height={"screen"} topHeading={"the"} mainHeading={"EDUCATED APPROACH"} bottomHeading={"TO MODERN MORTGAGE LENDING"} />
   <Cards heading={"how it works"}/>
   <ContactUs/>
    </div>
  );
};

export default Home;
