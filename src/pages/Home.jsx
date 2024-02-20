import React, { Suspense, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from "@react-three/drei";
import EarthMesh from '../components/3D/EarthMesh';
import MoonMesh from '../components/3D/MoonMesh';
import MarsMesh from '../components/3D/MarsMesh';
import JupiterMesh from '../components/3D/JupiterMesh';
import { Canvas, events } from "@react-three/fiber";
import '../assets/styles/style.css';
import { PerspectiveCamera } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

export const Home = () => {
  const [jobref, setJobref] = useState("Galaxy")
  const [model, setModel] = useState(false);
  const [aspectRatio, setAspectRatio] = useState(0);

  const handleEarthClick = (event, planetName) => {
    setModel(prev => !prev);
    switchValue(planetName);
  };

  function switchValue(type) {
    if (type === 'Earth') {
      setJobref("Earth")
    } else if (type === 'Moon') {
      setJobref("Moon")
    } else if (type === 'Mars') {
      setJobref("Mars")
    } else if (type === 'Jupiter') {
      setJobref("Jupiter")
    } else {
      setJobref("Space Galaxy")
    }
  }

  function AspectRatioFunc({ setAspectRatio }) {
    const { size } = useThree();
    const [canvasSize] = useState(size.width / size.height);

    useEffect(() => {
      setAspectRatio(canvasSize)
    }, [size]);
    return null;
  }
  console.log(aspectRatio); // Logs the current size of the canvas
  
  return (
    <section className='planetCanvas'>
      <div id="earth-label" className="planet-label labels" onClick={() => setModel(prev => !prev)}>Earth</div>
      <div id="moon-label" className="planet-label labels" onClick={() => setModel(prev => !prev)}>Moon</div>
      <div id="mars-label" className="planet-label labels" onClick={() => setModel(prev => !prev)}>Mars</div>
      <div id="jupiter-label" className="planet-label labels" onClick={() => setModel(prev => !prev)}>Jupiter</div>

      <div id="model-list" className={model ? "model-list" : "hidden"}>
        <h3 className='h3El'>Job at <span id="innerJob">{jobref}</span></h3>
        <ul>
          <li>Web Dev</li>
          <li>SEO gig</li>
          <li>Backend gig</li>
          <li>Python</li>
          <li>Embedded system gig</li>
        </ul>
      </div>
      <Canvas
        className="!h-screen !absolute !top-0 _!pointer-events-none"
        shadows
        camera={{ position: [5, 5, 5], fov: 45, far: 100, near: 0.01 }}>
        <AspectRatioFunc setAspectRatio={setAspectRatio} />
        {/* <PerspectiveCamera makeDefault={true} aspect={aspectRatio} /> */}
        <OrbitControls
          enableRotate={false}
          enableZoom={false}
          enablePan={false} />
        <ambientLight intensity={1} />
        <directionalLight intensity={10} position={[-2, 1, 1]} />
        <Suspense fallback={null}>
          <EarthMesh onClick={(event) => handleEarthClick(event, "Earth")} />
          <MoonMesh onClick={(event) => handleEarthClick(event, "Moon")} />
          <MarsMesh onClick={(event) => handleEarthClick(event, "Mars")} />
          <JupiterMesh onClick={(event) => handleEarthClick(event, "Jupiter")} />
        </Suspense>
      </Canvas>
    </section>
  );
}; ``
