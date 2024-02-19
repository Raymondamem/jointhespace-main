import { Suspense, useState } from 'react';
import * as THREE from 'three';
import { Environment, OrbitControls } from "@react-three/drei";
import EarthMesh from '../components/3D/EarthMesh';
import MoonMesh from '../components/3D/MoonMesh';
import MarsMesh from '../components/3D/MarsMesh';
import JupiterMesh from '../components/3D/JupiterMesh';
import { Canvas } from "@react-three/fiber";
import '../assets/styles/style.css';
import { PerspectiveCamera } from '@react-three/drei';

export const Home = () => {
  console.log(THREE);
  const [model, setModel] = useState(false);

  return (
    <section className='planetCanvas'>
      {/* <header>
        <div className="container">
          <div className="logo"><a href="/">JoinThe.Space</a></div>
          <nav>
            <a href="#">space jobs</a>
            <a href="#">articles</a>
            <a href="#">project</a>
            <a href="#">contact us</a>
          </nav>
          <div className="signAdd">
            <a href="#">login</a>
            <button>add job</button>
          </div>
        </div>
      </header> */}
      <div id="earth-label" className="planet-label labels" onClick={() => setModel(prev => !prev)}>Earth</div>
      <div id="moon-label" className="planet-label labels" onClick={() => setModel(prev => !prev)}>Moon</div>
      <div id="mars-label" className="planet-label labels" onClick={() => setModel(prev => !prev)}>Mars</div>
      <div id="jupiter-label" className="planet-label labels" onClick={() => setModel(prev => !prev)}>Jupiter</div>

      <div id="model-list" className={model ? "model-list" : "hidden"}>
        <h3 className='h3El'>Job at <span id="innerJob"></span></h3>
        <ul>
          <li>Web Dev</li>
          <li>SEO gig</li>
          <li>Backend gig</li>
          <li>Python</li>
          <li>Embedded system gig</li>
        </ul>
      </div>
      {/* earth mesh */}
      <Canvas className="!h-screen !absolute !top-0 _!pointer-events-none">
        <PerspectiveCamera resolution={0.01} />
        <OrbitControls
          enableRotate={false}
          enableZoom={false}
          enablePan={false} />
        <ambientLight intensity={1} />
        <directionalLight intensity={10} position={[-2, 1, 1]} />
        <Suspense fallback={null}>
          <EarthMesh />
          <MoonMesh />
          <MarsMesh />
          <JupiterMesh />
        </Suspense>
        {/* <Environment /> */}
      </Canvas>
      {/* moon mesh */}
      {/* <Canvas className="!h-screen !absolute !top-0 _!pointer-events-none">
        <OrbitControls
          enableRotate={true}
          enableZoom={false}
          enablePan={false} />
        <ambientLight intensity={1.2} />
        <directionalLight intensity={5} />
        <Suspense fallback={null}>
          <MoonMesh />
        </Suspense>
      </Canvas> */}
    </section>
  );
}; ``
