import React, { useState } from "react";
import MonsterLogo from "./components/monster-logo";
import { Scene } from "./components/Scene";
import ViewModel from "./components/view-model";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  return (
    <div className="h-full text-white pt-2 relative bg">
      <div className="w-full h-full absolute inset-0">
        <Scene />
      </div>

      {/* content */}
      <div className="content flex flex-col items-center gap-20 justify-center h-full">
        <div className="relative">
          <MonsterLogo fill={true} className="size-96" />
          <MonsterLogo
            fill={false}
            className="size-96 absolute inset-0 z-[2]"
          />
        </div>
      </div>
      {/* button */}

      <ViewModel />
    </div>
  );
};

export default App;
