import { Text, useTexture } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function CourseBoard({
  position,
  title,
  image,
  setActiveCourse
}) {

  const ref = useRef();
  const materialRef = useRef();

  const texture =
    useTexture(image);

  const isActive =
    useRef(false);

  useFrame(({ camera }) => {

  if (!ref.current) return;

  /* Make board face camera */

  ref.current.lookAt(
    camera.position
  );

  const distance =
    camera.position.distanceTo(
      ref.current.position
    );

  /* Visibility */

  if (materialRef.current) {

    let opacity =
      distance < 6 ? 1 : 0;

    materialRef.current.opacity =
      opacity;

  }

  /* Popup */

  if (distance < 4 && !isActive.current) {

    setActiveCourse(title);
    isActive.current = true;

  }

  if (distance >= 4 && isActive.current) {

    setActiveCourse(null);
    isActive.current = false;

  }

});

  return (

    <group
  ref={ref}
  position={position}
  userData={{ isCourse: true }}
>

      {/* Poster */}

      <mesh>

        <planeGeometry args={[3, 2]} />

        <meshStandardMaterial
          ref={materialRef}
          map={texture}
          transparent={true}
          opacity={0}
        />

      </mesh>

      {/* Title */}

      <Text
        position={[0, -1.4, 0]}
        fontSize={0.25}
        color="black"
        anchorX="center"
        anchorY="middle"
      >

        {title}

      </Text>

    </group>

  );

}