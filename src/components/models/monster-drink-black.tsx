import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cylinder_Material001_0: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};

export function MonsterDrinkBlack(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "monster-drink-black/scene.gltf"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Cylinder_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[0, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
      </group>
    </group>
  );
}
