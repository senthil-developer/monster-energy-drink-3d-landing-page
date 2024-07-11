import { useState } from "react";
import { Model, useModel } from "../hooks/useModel";
import { cn } from "../lib/cn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface ModelListType {
  id: number;
  modelName: Model;
}

const ViewModel = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        "w-full h-full  absolute inset-0 flex justify-end items-center pb-24 md:pb-10 flex-col"
      )}
    >
      {isOpen && (
        <div className="flex gap-3 bg-red-500 relative w-[460px] h-[150px] z-[10]">
          <ModelList />
        </div>
      )}
      <button onClick={() => setIsOpen(!isOpen)} className="z-[2]">
        Open
      </button>
    </div>
  );
};

export default ViewModel;

const ModelList = () => {
  const modelList: ModelListType[] = [
    { id: 1, modelName: "dragon" },
    { id: 2, modelName: "lycheee" },
    { id: 3, modelName: "pineapple" },
  ];

  const { model: currentModel, setModel } = useModel();

  useGSAP(() => {
    gsap.from(".model", {
      position: "absolute",
      left: "50%",
      bottom: "-10%",
      translate: "-50%",
      scale: 0.1,
      stagger: 0.1,
    });
  });

  return modelList.map((model: ModelListType) => (
    <button
      key={model.id}
      onClick={() => setModel(model.modelName)}
      className="model z-10"
    >
      <div
        className={cn(
          " transition-all relative size-[85px] md:size-36 border-4 rounded-full select-none group ",
          currentModel === model.modelName && "opacity-70",
          currentModel !== model.modelName &&
            "border-violet-300 hover:border-black"
        )}
      >
        <img
          src={`/monster-${model.modelName}.png`}
          className={cn(
            "object-cover w-full h-full rounded-full transition-all ",
            currentModel === model.modelName && "rotate-45",

            currentModel !== model.modelName && "group-hover:rotate-12"
          )}
        />
        {currentModel === model.modelName && (
          <img
            src="/monster-energy-drink-seeklogo.svg"
            className={cn(
              "size-6 md:size-[70px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] transition-all"
            )}
          />
        )}
      </div>
      <span className="sr-only">{model.modelName}</span>
    </button>
  ));
};
