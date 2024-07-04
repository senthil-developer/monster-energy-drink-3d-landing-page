import { useState } from "react";
import { useModel } from "../hooks/useModel";
import { cn } from "../lib/cn";

const ViewModel = () => {
  const { setModel } = useModel();

  return (
    <div
      className={cn(
        "w-full h-full bg-white absolute inset-0 flex justify-center items-end "
      )}
    >
      <div className="flex gap-3 mb-10">
        <ModelList />
      </div>
    </div>
  );
};

export default ViewModel;

const ModelList = () => {
  const modelList = [
    { id: 1, modelName: "dragon" },
    { id: 2, modelName: "lycheee" },
    { id: 3, modelName: "pineapple" },
  ];

  const { model: currentModel, setModel } = useModel();

  return modelList.map((model) => (
    <button
      key={model.id}
      className={cn(
        "bg-blue-400 text-white p-2 rounded-md z-10 transition-all",
        currentModel === model.modelName ? "bg-blue-800" : ""
      )}
      onClick={() => setModel(model.modelName)}
    >
      {model.modelName}
    </button>
  ));
};
