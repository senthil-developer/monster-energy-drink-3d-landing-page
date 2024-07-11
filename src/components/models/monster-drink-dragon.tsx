import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useModel } from "../../hooks/useModel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

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
  material.map = changeMaterial(model);

  useGSAP(() => {
    if (monsterRef.current) {
      const tl = gsap.timeline({
        defaults: {
          ease: "back.out(1.4)",
          duration: 2.5,
        },
      });
      tl.from(monsterRef.current?.position, {
        y: 20,
      })
        .from(
          monsterRef.current?.rotation,
          {
            z: 2,
          },
          "-=2.3"
        )
        .from(
          monsterRef.current?.scale,
          {
            x: "2",
            y: "2",
            z: "2",
          },
          "-=2.3"
        );

      gsap.to(monsterRef.current?.rotation, {
        y: 4,
        scrollTrigger: {
          trigger: ".content",
          start: "top 90%",
          end: "bottom bottom",
          scrub: true,
        },
      });

      gsap.to(monsterRef.current?.position, {
        x: -2,
        scrollTrigger: {
          trigger: ".content",
          start: "top 90%",
          end: "bottom bottom",
          scrub: true,
        },
      });
    }
  });

  return (
    <group {...props} ref={monsterRef} dispose={null}>
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials["Material.002"]}
        rotation={[-Math.PI / 2, 0, -0.5]}
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

  const Texture = textureLoader.load(option[texture!]);

  Texture.flipY = false;
  return Texture;
}
