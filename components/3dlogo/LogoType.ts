
import { Material } from 'three';
import * as THREE from 'three';

export type LogoPosition = {
    position: [number, number, number];
}


type GLTFNode = {
    geometry: THREE.BufferGeometry;
  };
  
  type GLTFMaterial = Material;
  
export type GLTFModel = {
    nodes: {
      [key: string]: GLTFNode;
    };
    materials: {
      [key: string]: GLTFMaterial;
    };
  };