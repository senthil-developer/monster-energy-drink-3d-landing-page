import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useModel } from "../../hooks/useModel";

type GLTFResult = GLTF & {
  nodes: {
    Object_6: THREE.Mesh;
  };
  materials: {
    ["Material.002"]: THREE.MeshStandardMaterial;
  };
};

export function MonsterDrinkDragon(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "monster-drink-dragon/scene.gltf"
  ) as GLTFResult;

  const monsterRef = useRef<THREE.Group>(null);

  const { model } = useModel();

  const material = materials["Material.002"];
  model != null && (material.map = changeMaterial(model));

  return (
    <group {...props} ref={monsterRef} dispose={null}>
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials["Material.002"]}
        rotation={[-Math.PI / 2, 0, 1.5]}
        position={[0, -2, 0]}
      />
    </group>
  );
}

function changeMaterial(texture: "dragon" | "lycheee" | "pineapple" | null) {
  const textureLoader = new THREE.TextureLoader();

  const option = {
    dragon: "monster-drink-dragon/textures/Material_001_baseColor.png",
    lycheee: "monster-drink-dragon/textures/Material_002_baseColor.png",
    pineapple: "monster-drink-dragon/textures/Material_baseColor.png",
  };

  const newTexture = textureLoader.load(option[texture!]);

  newTexture.flipY = false;

  return newTexture;
}
