import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'

export default function FurnitureThree(props) {
  const ref = useRef()
  const { nodes, materials } = useGLTF("/3d-models/furniture3.glb");

  useFrame((state, delta) => (ref.current.rotation.y += (delta/4)))
  
  return (
    <group {...props} dispose={null} ref={ref} scale={0.15} position={[0, -1.5, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials.Metall_Hrom_01}
        position={[-0.02, 19.25, -4.63]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object001.geometry}
        material={materials.Pupki_01}
        position={[-5.55, 12.23, 3.09]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shape001.geometry}
        material={materials.Strochka_02}
        position={[-0.03, 17.86, 0.93]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object002.geometry}
        material={materials.Wood_01}
        position={[0, 7.06, 6.85]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box029.geometry}
        material={materials.Skin_02}
        position={[-0.02, 17.86, 0.93]}
        scale={0.03}
      />
    </group>
  );
}

useGLTF.preload("/3d-models/furniture3.glb");