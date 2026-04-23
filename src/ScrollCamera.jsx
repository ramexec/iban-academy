import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { cameraStops } from "./CameraStops";

export let currentStep = 0;

export default function ScrollCamera() {
  const scroll = useScroll();
  const lookTarget = useRef(new THREE.Vector3(0, 0, 0));
  const desiredPos = useRef(new THREE.Vector3());
  const desiredLook = useRef(new THREE.Vector3());

  useFrame(({ camera }) => {
    // 0.2 friction for snappy, non-laggy movement
    const friction = 0.02; 
    
    /**
     * THE FIX:
     * We multiply the scroll offset by 1.25.
     * This means when the user has scrolled 80% of the way (0.8),
     * the camera 'progress' already hits 1.0 (100%).
     * Math.min(..., 1) ensures it stays locked at the last stop for the final 20%.
     */
    const cameraProgress = Math.min(scroll.offset * 1.25, 1);
    
    const stopIndex = Math.floor(cameraProgress * (cameraStops.length - 1));
    currentStep = stopIndex;

    const stop = cameraStops[stopIndex];

    if (stop) {
      desiredPos.current.set(...stop.position);
      desiredLook.current.set(...stop.lookAt);

      camera.position.lerp(desiredPos.current, friction);
      lookTarget.current.lerp(desiredLook.current, friction);
      camera.lookAt(lookTarget.current);
    }
  });

  return null;
}