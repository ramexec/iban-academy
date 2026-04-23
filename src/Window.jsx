export default function Windows() {

  const windows = [];

  for (let i = 0; i < 10; i++) {

    const z = -i * 18 - 10;

    // Left wall windows
    windows.push(

      <mesh
        key={`L-${i}`}
        position={[-9.7, 3, z]}
      >

        <boxGeometry args={[0.2, 2, 4]} />

        <meshStandardMaterial
          color="#87ceeb"
          emissive="#87ceeb"
          emissiveIntensity={0.3}
        />

      </mesh>

    );

    // Right wall windows
    windows.push(

      <mesh
        key={`R-${i}`}
        position={[9.7, 3, z]}
      >

        <boxGeometry args={[0.2, 2, 4]} />

        <meshStandardMaterial
          color="#87ceeb"
          emissive="#87ceeb"
          emissiveIntensity={0.3}
        />

      </mesh>

    );

  }

  return <>{windows}</>;

}