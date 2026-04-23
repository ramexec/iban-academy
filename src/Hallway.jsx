export default function Hallway() {

  const lights = [];

  // Create multiple ceiling lights
  for (let i = 0; i < 10; i++) {

    lights.push(

      <mesh
        key={i}
        position={[0, 5.8, -i * 20]}
      >

        <boxGeometry args={[4, 0.1, 6]} />

        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={2}
        />

      </mesh>

    );

  }

  return (

    <>

      {/* Floor */}

      <mesh rotation={[-Math.PI / 2, 0, 0]}>

        <planeGeometry args={[20, 200]} />

        <meshStandardMaterial color="#d9d9d9" />

      </mesh>

      {/* Left Wall */}

      <mesh position={[-10, 3, -100]}>

        <boxGeometry args={[0.5, 6, 200]} />

        <meshStandardMaterial color="#eeeeee" />

      </mesh>

      {/* Right Wall */}

      <mesh position={[10, 3, -100]}>

        <boxGeometry args={[0.5, 6, 200]} />

        <meshStandardMaterial color="#eeeeee" />

      </mesh>

      {/* Ceiling */}

      <mesh position={[0, 6, -100]}>

        <boxGeometry args={[20, 0.5, 200]} />

        <meshStandardMaterial color="#f5f5f5" />

      </mesh>

      {/* Ceiling Lights */}

      {lights}

    </>

  );

}