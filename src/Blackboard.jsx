import { Text } from "@react-three/drei";

export default function Blackboard() {

  return (

    <group position={[0, 3, -110]}>

      {/* Blackboard */}

      <mesh>

        <boxGeometry args={[10, 4, 0.2]} />

        <meshStandardMaterial
          color="#1b3b2f"
        />

      </mesh>

      {/* Chalk Title */}

      <Text
        position={[0, 0.5, 0.15]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >

        Welcome to IBAN Academy

      </Text>

      {/* Subtitle */}

      <Text
        position={[0, -1, 0.15]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >

        Choose Your Course

      </Text>

    </group>

  );

}