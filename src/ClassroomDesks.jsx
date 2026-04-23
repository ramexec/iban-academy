import Desk from "./Desk";

export default function ClassroomDesks() {

  const desks = [];

  // Create rows of desks
  for (let row = 0; row < 12; row++) {

    const z = -row * 8 - 8;

    // Left side desks
    desks.push(
      <Desk
        key={`L1-${row}`}
        position={[-5, 0, z]}
      />
    );

    desks.push(
      <Desk
        key={`L2-${row}`}
        position={[-7.5, 0, z]}
      />
    );

    // Right side desks
    desks.push(
      <Desk
        key={`R1-${row}`}
        position={[5, 0, z]}
      />
    );

    desks.push(
      <Desk
        key={`R2-${row}`}
        position={[7.5, 0, z]}
      />
    );

  }

  return <>{desks}</>;

}