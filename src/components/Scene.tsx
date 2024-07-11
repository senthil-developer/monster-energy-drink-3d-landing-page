import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { MonsterDrinkDragon } from "./models/monster-drink-dragon";
import { OrbitControls } from "@react-three/drei";

export function Scene() {
  return (
    <Suspense fallback={<p>Loading....</p>}>
      <Canvas shadows className="z-[2]">
        <ambientLight intensity={3} />
        <pointLight position={[12, 5, 10]} intensity={200} />
        <MonsterDrinkDragon position={[0, -2, 0]} />
      </Canvas>
    </Suspense>
  );
}
