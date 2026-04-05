import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";

function Particles() {
  const ref = useRef();
 //Ye particle positions sirf ek baar generate karta hai.
  const positions = useMemo(() => { 
    const arr = new Float32Array(5000 * 3);

    for (let i = 0; i < 5000; i++) {
        ///Ye har particle ko random 3D position deta hai.
      arr[i * 3] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    return arr;
  }, []);

  /// useFrame har frame me call hota hai, isme hum particles ko rotate karte hain.
  //delta :previous frame aur current frame ke beech ka time
  useFrame((state, delta) => {
    ///Ye particles ko slow rotate karta hai:y axis = left/right rotation, x axis = up/down rotation
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05;
      ref.current.rotation.x += delta * 0.02;
    } 
  });

  return (
    <Points ref={ref} positions={positions} stride={3}> // Ye particle cloud render karta hai.
      <PointMaterial
        transparent
        color="purple"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
      />  // Iska kaam particles ki styling hai:
    </Points>
  );
}

export default function ParticleBackgroundUI() {
 return (
  <div className="absolute inset-0 w-full h-full">
    <Canvas
      camera={{ position: [0, 0, 5] }}
      dpr={[1, 1.5]}
      gl={{ antialias: false }}
    > // Canvas component 3D scene ke liye container provide karta hai.
      <ambientLight intensity={1} />
      <Particles />
    </Canvas>
  </div>
);
}