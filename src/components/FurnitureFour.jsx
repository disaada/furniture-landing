import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'

export default function FurnitureFour(props) {
  const ref = useRef()
  const { nodes, materials } = useGLTF("/3d-models/furniture4.glb");

  useFrame((state, delta) => (ref.current.rotation.y += (delta/4)))

  return (
    <group {...props} dispose={null} scale={5} position={[0, -1.5, 0]}>
      <mesh
        ref={ref}
        castShadow
        receiveShadow
        geometry={nodes.ChairSoborgOak.geometry}
        material={materials.Material}
        rotation={[0, -0.42, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_1.geometry}
          material={materials.AllenScrew}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_2.geometry}
          material={materials.AllenScrewHole}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle005.geometry}
          material={materials.AllenScrew}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle005_1.geometry}
          material={materials.AllenScrewHole}
        />
        <group position={[0, 0, 0.01]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle006.geometry}
            material={materials.AllenScrew}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle006_1.geometry}
            material={materials.AllenScrewHole}
          />
        </group>
        <group position={[0, 0, 0.01]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle004.geometry}
            material={materials.AllenScrew}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle004_1.geometry}
            material={materials.AllenScrewHole}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials.Material}
          position={[0, 0, 0.01]}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/3d-models/furniture4.glb");