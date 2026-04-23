import { useEffect, useState } from "react";
import { currentStep }
  from "./ScrollCamera";

export default function Hero() {

  const [opacity, setOpacity] =
    useState(1);

  useEffect(() => {

    const interval =
      setInterval(() => {

        if (currentStep > 0) {

          setOpacity(0);

        } else {

          setOpacity(1);

        }

      }, 50);

    return () =>
      clearInterval(interval);

  }, []);

  return (

    <div
      style={{

        position: "fixed",
        top: "45%",
        left: "50%",
        transform:
          "translate(-50%, -50%)",

        textAlign: "center",

        color: "white",
        fontFamily: "sans-serif",

        zIndex: 900,

        pointerEvents: "none",

        opacity: opacity,

        transition:
          "opacity 0.8s ease"

      }}
    >

      <h1
        style={{
          fontSize: "64px",
          margin: 0
        }}
      >

        IBAN Academy

      </h1>

      <p>

        Walk Your Path.
        Discover Your Course.

      </p>

      <p>

        ↓ Scroll to Explore

      </p>

    </div>

  );

}