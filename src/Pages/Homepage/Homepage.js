import React from "react";
import Firstel from "../../Components/ui/Firstel";
import Secondel from "../../Components/ui/Secondel";
import Thirdel from "../../Components/ui/Thirdel";
import HomeStyle from "./Homepage.module.css";

function Homepage() {
  return (
    <div className={HomeStyle.fillPage}>
      <Secondel />
      <Firstel />
      <Thirdel />
    </div>
  );
}

export default Homepage;
