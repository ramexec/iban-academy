export default function Desk({ position }) {

  return (

    <group position={position}>

      {/* Desk top */}

      <mesh position={[0, 0.7, 0]}>

        <boxGeometry args={[1.6, 0.1, 1]} />

        <meshStandardMaterial color="#c79a63" />

      </mesh>

      {/* Legs */}

      {[
        [0.7, 0.35, 0.45],
        [-0.7, 0.35, 0.45],
        [0.7, 0.35, -0.45],
        [-0.7, 0.35, -0.45]
      ].map((pos, i) => (

        <mesh key={i} position={pos}>

          <boxGeometry args={[0.1, 0.7, 0.1]} />

          <meshStandardMaterial color="#444" />

        </mesh>

      ))}

    </group>

  );

}