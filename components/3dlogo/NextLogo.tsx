'use client';

import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import gsap from "gsap"
import { LogoPosition, GLTFModel } from "./LogoType"
import { getPath } from '@/global';


const NextLogo =(props:LogoPosition) => {
    const logoRef = useRef<THREE.Mesh>(null)
    // const { nodes, materials } = useGLTF('/models/next.glb') as any
    const { nodes, materials } = useGLTF(`${getPath()}/models/next.glb`) as unknown as GLTFModel
    


    useEffect(() => {

      if (materials.material_0) {
        const material = materials.material_0 as THREE.MeshStandardMaterial;
        material.color = new THREE.Color('#FFFFFF'); // Set the color to white (brighter)
        material.metalness = 0.3;
        material.roughness = 0.1;
        material.emissive = new THREE.Color('#FFFFFF'); // Make the material glow white (brighter)
        material.emissiveIntensity = 1.5; // Increase the emissive intensity to make it brighter
      }else{
        console.log("Fail");
      }
  
        
      if (!logoRef.current) return;
  
      const initialY = logoRef.current.position.y;
  
      gsap.to(logoRef.current.position, {
        y: initialY + 8,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, [materials]);


    return (
      <group {...props} scale={0.4}>
        <mesh
          ref={logoRef}
          geometry={nodes.Object_5.geometry}
          material={materials.material_0}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.05, 0.05, 0.05]}
        />
      </group>
    )
  }
  
useGLTF.preload('/models/next.glb')


export default NextLogo