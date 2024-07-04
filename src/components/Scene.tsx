import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { MonsterDrinkBlack } from "./models/monster-drink-black";
import { MonsterDrinkDragon } from "./models/monster-drink-dragon";
import { Environment, OrbitControls } from "@react-three/drei";
import { SpotLight } from "@react-three/drei";
import { useModel } from "../hooks/useModel";

export function Scene() {
  const { isOpen } = useModel();
  return !isOpen ? (
    <Suspense fallback={<p>Loading....</p>}>
      <Canvas shadows className="z-[2]">
        <Environment preset="apartment" />
        <SpotLight intensity={1} position={[1, -29, 1]} />
        <pointLight position={[10, 10, 10]} />
        <MonsterDrinkBlack position={[0, 0, -20]} />
      </Canvas>
    </Suspense>
  ) : (
    <ModelCanvas />
  );
}

const ModelCanvas = () => {
  return (
    <Canvas shadows className="z-[2]">
      <Environment preset="apartment" />
      <SpotLight intensity={1} position={[1, -29, 1]} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <MonsterDrinkDragon />
    </Canvas>
  );
};
