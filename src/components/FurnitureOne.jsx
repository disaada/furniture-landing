import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'

export default function FurnitureOne(props) {
  const ref = useRef()
  const { nodes, materials } = useGLTF("/3d-models/furniture1.glb");

  useFrame((state, delta) => (ref.current.rotation.y += (delta/4)))

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.6, 0]} scale={2} >
        <mesh
          ref={ref}
          castShadow
          receiveShadow
          geometry={nodes.HUG_ARMCHAIRHUG_Armchair_602_014.geometry}
          material={materials.Base}
          rotation={[0.2, 0, 0, 'XYZ']}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/3d-models/furniture1.glb");
