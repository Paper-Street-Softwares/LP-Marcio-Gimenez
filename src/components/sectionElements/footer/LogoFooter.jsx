import React from "react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import content from "../../../content/content";

function LogoFooter() {
  return (
    <MotionDivDownToUp>
      <div className="h-[115px] flex justify-start items-center">
        <img
          src={content.texts.navbar.logoFooter.img}
          alt={content.texts.navbar.logoFooter.alt}
          className="max-h-[100px] w-auto p-1 bg-white "
        ></img>
      </div>
    </MotionDivDownToUp>
  );
}

export default LogoFooter;
