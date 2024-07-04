import React, { useState } from "react";
import MonsterLogo from "./components/monster-logo";
import { Scene } from "./components/Scene";
import ViewModel from "./components/view-model";
import { useModel } from "./hooks/useModel";

interface ButtonProps {
  setOpenModel: (prevOpen: boolean) => void;
  children: React.ReactNode;
}

const App = () => {
  const [openModel, setOpenModel] = useState(false);

  return (
    <div className=" min-h-[100vh] text-white flex justify-center pt-2 relative">
      <MonsterLogo />
      <div className="w-full h-full absolute inset-0">
        <Scene />
      </div>
      <div className="absolute top-5 right-5 bg-red-500 z-10">
        <Button setOpenModel={setOpenModel}>
          {openModel ? "Close" : "Open"}
        </Button>
      </div>
      {openModel && <ViewModel />}
    </div>
  );
};

export default App;

const Button: React.FC<ButtonProps> = ({ setOpenModel, children }) => {
  const { setIsOpen, isOpen } = useModel();
  return (
    <button
      className="bg-blue-400 text-white p-2 rounded-md transition-all"
      onClick={() => {
        setOpenModel((prevOpen) => !prevOpen);
        setIsOpen(!isOpen);
      }}
    >
      {children}
    </button>
  );
};
