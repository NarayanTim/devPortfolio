'use client';

import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import gsap from "gsap"
import { LogoPosition, GLTFModel } from "./LogoType"


const UnityLogo =(props:LogoPosition) => {
    const logoRef = useRef<THREE.Mesh>(null)
    const { nodes, materials } = useGLTF('/models/unity.glb') as unknown as GLTFModel


    useEffect(() => {
        
      if (!logoRef.current) return;
  
      const initialY = logoRef.current.position.y;
  
      gsap.to(logoRef.current.position, {
        y: initialY + 8,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, []);


    return (
      <group {...props} scale={0.2}>
        <mesh
          ref={logoRef}
          geometry={nodes['Unity_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
        //   rotation={[0, 0, -Math.PI / 2]}
          scale={[0.02, 0.02, 0.02]}
        />
      </group>
    )
  }
  
useGLTF.preload('/models/unity.glb')


export default UnityLogo