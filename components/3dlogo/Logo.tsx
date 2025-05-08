'use client';
import React from 'react'
import { PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import CanvasLoader from './../CanvasLoader';

import ReactLogo from './ReactLogo';
import PythonLogo from './PythonLogo';
import NodeLogo from './NodeLogo';
import NextLogo from './NextLogo';
import UnityLogo from './UnityLogo';

type Sizes = {
  react: [number, number, number];
  python: [number, number, number];
  node: [number, number, number];
  next: [number, number, number];
  unity: [number, number, number];
};


const Logo = ({ sizes }: {sizes:Sizes }) => {
  {console.log("Next Position is: " + sizes.next)}
  return (
    <div className="w-full h-full absolute inset-0">
    <Canvas className="w-full h-full">
        <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <group>
              <ReactLogo position={sizes.react} />
              <PythonLogo position={sizes.python} />
              <NodeLogo position={sizes.node} />
              <NextLogo position={sizes.next} /> 
              <UnityLogo position={sizes.unity} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
        </Suspense>
        </Canvas>
    </div>
  )
}

export default Logo