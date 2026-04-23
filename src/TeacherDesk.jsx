export default function TeacherDesk() {

  return (

    <group position={[0, 0, -102]}>

      {/* Desk Top */}

      <mesh position={[0, 1, 0]}>

        <boxGeometry args={[4, 0.2, 2]} />

        <meshStandardMaterial color="#b5835a" />

      </mesh>

      {/* Left Side */}

      <mesh position={[-1.8, 0.5, 0]}>

        <boxGeometry args={[0.3, 1, 2]} />

        <meshStandardMaterial color="#8b5e3c" />

      </mesh>

      {/* Right Side */}

      <mesh position={[1.8, 0.5, 0]}>

        <boxGeometry args={[0.3, 1, 2]} />

        <meshStandardMaterial color="#8b5e3c" />

      </mesh>

      {/* Front Panel */}

      <mesh position={[0, 0.5, 0.9]}>

        <boxGeometry args={[4, 1, 0.2]} />

        <meshStandardMaterial color="#8b5e3c" />

      </mesh>

    </group>

  );

}