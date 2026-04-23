export default function SchoolBag({ position }) {

  return (

    <mesh position={position}>

      {/* Bag body */}

      <boxGeometry args={[0.4, 0.5, 0.3]} />

      <meshStandardMaterial
        color="#3366cc"
      />

    </mesh>

  );

}