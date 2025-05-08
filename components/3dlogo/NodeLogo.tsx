'use client';

import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import gsap from "gsap"
import { LogoPosition, GLTFModel } from "./LogoType"
import { getPath } from '@/global';

const NodeLogo =(props:LogoPosition) => {
    const logoRef = useRef<THREE.Mesh>(null)
    const { nodes, materials } = useGLTF(`${getPath()}/models/node.glb`) as unknown as GLTFModel


    useEffect(() => {
      if (!logoRef.current) return;
  
      const initialY = logoRef.current.position.y;
  
      gsap.to(logoRef.current.position, {
        y: initialY + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, []);


    return (
      <group {...props} scale={0.8}>
        <mesh
          ref={logoRef}
          geometry={nodes['tripo_node_a2ae1f0a-576e-4d11-a22b-f4f90dd99b4b'].geometry}
          material={materials['tripo_material_a2ae1f0a-576e-4d11-a22b-f4f90dd99b4b']}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1.5, 1.5, 1.5]}
        />
      </group>
    )
  }
  
useGLTF.preload('/models/node.glb')


export default NodeLogo