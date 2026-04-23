import { useEffect, useState } from "react";
import { currentStep }
  from "./ScrollCamera";

const courses = [

  null,

  "Web Development",
  "Game Development",
  "AI & ML",
  "Cyber Security",
  "Cloud Computing",
  "Data Science",

  "Welcome to IBAN Academy"

];

export default function Popup() {

  const [step, setStep] =
    useState(currentStep);

  /* Watch step changes */

  useEffect(() => {

    const interval =
      setInterval(() => {

        setStep(currentStep);

      }, 50);

    return () =>
      clearInterval(interval);

  }, []);

  const title =
    courses[step];

  if (!title) return null;

  return (

    <div
      style={{

        position: "fixed",

        bottom: "40px",
        left: "50%",

        transform:
          "translateX(-50%)",

        padding: "20px 30px",

        background:
          "rgba(0,0,0,0.85)",

        color: "white",

        borderRadius: "12px",

        fontSize: "20px",

        zIndex: 1000,

        transition:
          "opacity 0.4s ease"

      }}
    >

      {title}

    </div>

  );

}