import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'

export default function FurnitureTwo(props) {
  const ref = useRef()
  const { nodes, materials } = useGLTF("/3d-models/furniture2.glb");

  useFrame((state, delta) => (ref.current.rotation.y += (delta/4)))

  return (
    <group {...props} dispose={null} ref={ref} scale={10} position={[0, -1.5, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle005.geometry}
        material={materials["02 - VRay Material"]}
        rotation={[-Math.PI, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials["derevo star.saltov"]}
        rotation={[0, 1.57, 0]}
      />
    </group>
  );
}

useGLTF.preload("/3d-models/furniture2.glb");