import { useRef, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';

export default function Card3D({ frontTexture, backTexture }) {
  const cardRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [rotationVelocity, setRotationVelocity] = useState(0.002);

  const front = useLoader(TextureLoader, frontTexture);
  const back = useLoader(TextureLoader, backTexture);

  useFrame(() => {
    if (!flipped) {
      cardRef.current.rotation.y += rotationVelocity;
    }
  });

  const handleClick = () => {
    setFlipped(!flipped);
  };

  const handlePointerDown = () => {
    setRotationVelocity(0);
  };

  const handlePointerUp = () => {
    setRotationVelocity(0.002);
  };

  return (
    <mesh
      ref={cardRef}
      position={[0, 0, 0]}
      onClick={handleClick}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[2, 3, 0.05]} />
      <meshStandardMaterial attach="material-0" map={front} />
      <meshStandardMaterial attach="material-1" map={front} />
      <meshStandardMaterial attach="material-2" map={front} />
      <meshStandardMaterial attach="material-3" map={front} />
      <meshStandardMaterial attach="material-4" map={flipped ? back : front} />
      <meshStandardMaterial attach="material-5" map={flipped ? front : back} />
    </mesh>
  );
}
