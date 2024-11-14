import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader';
import { Effects } from '@react-three/drei';

const Model = () => {
  const gltf = useLoader(GLTFLoader, './Model/DamagedHelmet.gltf');
  
  return (
    <primitive 
      object={gltf.scene} 
      scale={1}
      position={[0, 0, 0]}
    />
  );
};

const RGBShiftEffect = () => {
  return (
    <Effects>
      <shaderPass args={[RGBShiftShader]} />
    </Effects>
  );
};

const HelmetViewer = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas
        camera={{
          fov: 40,
          position: [0, 0, 3.5]
        }}
      >
        <Suspense fallback={null}>
          <OrbitControls />
          <Environment 
            files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/pond_bridge_night_1k.hdr"
            background
          />
          <Model />
          <RGBShiftEffect />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HelmetViewer;