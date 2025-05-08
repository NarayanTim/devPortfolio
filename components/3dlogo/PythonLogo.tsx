'use client';

import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import gsap from "gsap"
import { useGSAP } from '@gsap/react';
import { LogoPosition, GLTFModel } from "./LogoType"


const PythonLogo = (props:LogoPosition) => {
    const pythonLogoRef = useRef<THREE.Mesh>(null)
    const { nodes, materials } = useGLTF('/models/python.glb') as unknown as GLTFModel

    useEffect(() => {
        const material = materials.Python  as THREE.MeshStandardMaterial;
        if (material) {
          material.color = new THREE.Color('#FFFFFF');
          material.metalness = 0.3;
          material.roughness = 0.2;
        } else {
          console.error("Material 'material_0' not found!");
        }


      }, [materials])

    useGSAP(() => {
        if (!pythonLogoRef.current) return
        gsap.to(pythonLogoRef.current.position, {
          y: pythonLogoRef.current.position.y + 100,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
    })

    return (
        <group {...props} dispose={null}>
        <group scale={0.04}>
            <mesh
            ref={pythonLogoRef}
            geometry={nodes.Python_Python_0.geometry}
            material={materials.Python}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.49, 0.49, 0.6]}
          />
        </group>
      </group>
    )
}

useGLTF.preload('/models/python.glb')

export default PythonLogo