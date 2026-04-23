export default function Footer() {

  return (

    <footer
      style={{

        background: "#050505",

        color: "white",

        padding: "40px",

        textAlign: "center",

        borderTop:
          "1px solid rgba(255,255,255,0.1)",

        fontFamily:
          "'Segoe UI', sans-serif"

      }}
    >

      <h2
        style={{
          marginBottom: "10px"
        }}
      >

        Being Iban

      </h2>

      <p
        style={{
          opacity: 0.7
        }}
      >

        Empowering the Future of Technology Learning.

      </p>

      <div
        style={{
          marginTop: "20px",
          fontSize: "14px",
          opacity: 0.6
        }}
      >

        © {new Date().getFullYear()} Being Iban.
        All rights reserved.

      </div>

    </footer>

  );

}