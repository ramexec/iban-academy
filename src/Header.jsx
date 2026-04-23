import { useState } from "react";

export default function Header() {

  const [hover, setHover] =
    useState(null);

  const navItem = (name) => (

    <span
      onMouseEnter={() =>
        setHover(name)
      }
      onMouseLeave={() =>
        setHover(null)
      }

      style={{

        cursor: "pointer",

        position: "relative",

        padding: "6px 2px",

        color:
          hover === name
            ? "#4da6ff"
            : "white",

        transition:
          "color 0.25s ease",

        whiteSpace: "nowrap"

      }}
    >

      {name}

      <div
        style={{

          position: "absolute",

          bottom: -2,
          left: 0,

          width:
            hover === name
              ? "100%"
              : "0%",

          height: "2px",

          background:
            "#4da6ff",

          transition:
            "width 0.25s ease"

        }}
      />

    </span>

  );

  return (

    <div
      style={{

        position: "fixed",

        top: 0,
        left: 0,

        width: "100vw",

        height: "70px",

        display: "flex",

        alignItems: "center",

        justifyContent:
          "space-between",

        padding:
          "0 20px",

        boxSizing:
          "border-box",  // ⭐ fixes overflow

        background:
          "rgba(0,0,0,0.55)",

        backdropFilter:
          "blur(10px)",

        borderBottom:
          "1px solid rgba(255,255,255,0.1)",

        color: "white",

        fontFamily:
          "'Segoe UI', sans-serif",

        zIndex: 2000,

        overflow: "hidden"

      }}
    >

      {/* LEFT — Logo */}

      <div
        style={{

          display: "flex",

          alignItems: "center",

          gap: "8px",

          flexShrink: 0

        }}
      >

        <div style={{ fontSize: "24px" }}>
          🎓
        </div>

        <div
          style={{

            fontSize: "20px",

            fontWeight: "600",

            whiteSpace:
              "nowrap"

          }}
        >

          IBAN Academy

        </div>

      </div>

      {/* CENTER — Navigation */}

      <div
        style={{

          display: "flex",

          gap: "18px",

          fontSize: "15px",

          alignItems: "center",

          overflow: "hidden"

        }}
      >

        {navItem("Courses")}
        {navItem("About")}
        {navItem("Contact")}

      </div>

      {/* RIGHT — Button */}

      <button
        style={{

          padding:
            "8px 14px",

          borderRadius:
            "8px",

          border: "none",

          fontSize: "14px",

          fontWeight: "600",

          background:
            "linear-gradient(135deg,#4da6ff,#0066ff)",

          color: "white",

          cursor: "pointer",

          flexShrink: 0

        }}

      >

        Enroll

      </button>

    </div>

  );

}