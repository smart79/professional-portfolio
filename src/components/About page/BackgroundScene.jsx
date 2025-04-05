import { Environment, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

export default function BackgroundScene({ children }) {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <Suspense fallback={null}>
        <Environment
          files="/assets/environments/rogland_clear_night_4k.exr"
          background
        />
        {children}
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={true} />
    </>
  );
}
