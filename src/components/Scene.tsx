import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { MonsterDrinkDragon } from "./models/monster-drink-dragon";
import { OrbitControls } from "@react-three/drei";

export function Scene() {
  return (
    <Suspense fallback={<p>Loading....</p>}>
      <Canvas shadows className="z-[2] bg-transparent">
        <ambientLight intensity={3} />
        <pointLight position={[12, 5, 10]} intensity={200} />
        <MonsterDrinkDragon position={[0, 0.5, 0]} />

        <OrbitControls enablePan={false} minDistance={2} maxDistance={7} />
      </Canvas>
    </Suspense>
  );
}
