'use client';
import React from 'react';
import { Float, useGLTF } from '@react-three/drei';
import { LogoPosition, GLTFModel } from './LogoType';



const ReactLogo = (props:LogoPosition) => {
  const { nodes, materials } = useGLTF('/models/reactLogo.glb') as unknown as GLTFModel;

  return (
    <Float  floatIntensity={5}>
      <group {...props} scale={0.3}>
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 0.9793, 0.181]}
          // rotation={[0, 0, -Math.PI / 2]}
          scale={[0.39, 0.39, 0.5]}
        />
      </group>
    </Float>
  );
}

useGLTF.preload('/models/reactLogo.glb');

export default ReactLogo