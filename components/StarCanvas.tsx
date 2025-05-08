"use client"
import React, { useRef, Suspense, useMemo  } from 'react'
import {Canvas, useFrame} from "@react-three/fiber"
import {PointMaterial} from "@react-three/drei"
import * as THREE from 'three';


import CanvasLoader from './CanvasLoader';

const StarCanvasSetup = () => {

  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const count = 2000;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      const r = 1.2 * Math.cbrt(Math.random()); 
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i] = r * Math.sin(phi) * Math.cos(theta);
      arr[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);


  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geom.computeBoundingSphere();
    return geom;
  }, [positions]);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <points ref={ref} geometry={geometry}>
      <PointMaterial
        color="#ffffff"
        size={0.005}
        sizeAttenuation
        transparent
        depthWrite={false}
      />
    </points>
  );



}



export const StarCanvas = () =>{
  return (
    <div className='w-full h-auto fixed inset-0 z-[1] pointer-events-none'>
      <Canvas camera={{position: [0, 0, 1]}}>
        <Suspense fallback={<CanvasLoader/>}>
          <StarCanvasSetup/>
        </Suspense>
      </Canvas>

    </div>
  )


}



export default StarCanvas