import SchoolBag from "./SchoolBag";

export default function ClassroomBags() {

  const bags = [];

  // Add bags randomly
  for (let row = 0; row < 12; row++) {

    const z = -row * 8 - 8;

    // Add bags only on some rows
    if (row % 2 === 0) {

      bags.push(
        <SchoolBag
          key={`L-${row}`}
          position={[-5, 1.1, z]}
        />
      );

      bags.push(
        <SchoolBag
          key={`R-${row}`}
          position={[5, 1.1, z]}
        />
      );

    }

  }

  return <>{bags}</>;

}