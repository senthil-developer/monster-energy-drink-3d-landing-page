import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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

  const monsterRef = useRef<THREE.Group>(null);

  useGSAP(() => {
    if (monsterRef.current)
      gsap.to(monsterRef.current.rotation, {
        x: Math.PI / -2,
        ease: "power1.inOut",
        duration: 2,
        scrollTrigger: {
          trigger: ".content",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
  }, []);

  return (
    <group {...props} dispose={null} ref={monsterRef}>
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
