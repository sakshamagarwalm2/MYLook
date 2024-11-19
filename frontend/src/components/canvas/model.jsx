import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader';
import { Effects } from '@react-three/drei';
import * as THREE from 'three';

const Model = () => {
  const gltf = useLoader(GLTFLoader, './Model/DamagedHelmet.gltf');
  const modelRef = useRef();
  const { viewport, size } = useThree();

  // Add resize listener to update position
  useEffect(() => {
    const handleResize = () => {
      if (modelRef.current) {
        const isMobile = window.innerWidth < 768;
        modelRef.current.position.y = isMobile ? -0.2 : 0; // Adjusted mobile Y position
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial position set
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;

    if (modelRef.current) {
      modelRef.current.rotation.y = THREE.MathUtils.lerp(
        modelRef.current.rotation.y,
        x * 0.5,
        0.1
      );
      modelRef.current.rotation.x = THREE.MathUtils.lerp(
        modelRef.current.rotation.x,
        -y * 0.5,
        0.1
      );
    }
  });

  // Responsive scale calculation
  const scale = Math.min(viewport.width, viewport.height) * 0.37;
  
  // Adjust scale for mobile
  const mobileScaleFactor = size.width < 768 ? 0.9 : 1;
  const finalScale = scale * mobileScaleFactor;

  // Improved mobile positioning
  // const isMobile = size.width < 768;
  const xPos = 0; // Keep centered horizontally
  const yPos = 0; // Slightly adjusted for mobile
  const zPos = 0;

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={finalScale}
      position={[xPos, yPos, zPos]}
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
    <div style={{ width: '100vw', height: '100vh', position: 'absolute', top: 0 }}>
      <Canvas
        camera={{
          fov: 40,
          position: [0, 0, window.innerWidth < 768 ? 4 : 3.5], // Adjusted mobile camera distance
          near: 0.1,
          far: 1000
        }}
        dpr={Math.min(window.devicePixelRatio, 2)}
      >
        <Suspense fallback={null}>
          <Environment
            files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/pond_bridge_night_1k.hdr"
            background={false}
            preset={null}
          />
          <Model />
          <RGBShiftEffect />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HelmetViewer;