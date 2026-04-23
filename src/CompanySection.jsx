export default function CompanySection() {

  return (

    <section
      style={{

        minHeight: "100vh",

        padding: "120px 40px",

        background:
          "linear-gradient(180deg,#0a0a0a,#111)",

        color: "white",

        fontFamily:
          "'Segoe UI', sans-serif",

        display: "flex",

        flexDirection: "column",

        justifyContent: "center",

        alignItems: "center",

        textAlign: "center"

      }}
    >

      {/* Title */}

      <h1
        style={{

          fontSize: "48px",

          marginBottom: "20px"

        }}
      >

        About Being Iban

      </h1>

      {/* Description */}

      <p
        style={{

          maxWidth: "800px",

          fontSize: "18px",

          lineHeight: "1.7",

          opacity: 0.85

        }}
      >

        Being Iban is a modern technology academy focused on
        delivering industry-ready skills in Web Development,
        Game Development, Artificial Intelligence, Cyber
        Security, and Cloud Computing.

        Our mission is to empower students with practical
        knowledge through immersive learning experiences and
        real-world projects.

      </p>

      {/* Cards */}

      <div
        style={{

          marginTop: "60px",

          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",

          gap: "30px",

          width: "100%",

          maxWidth: "900px"

        }}
      >

        {[
          {
            title: "Our Mission",
            text:
              "Empower learners with real-world technical skills."
          },

          {
            title: "Our Vision",
            text:
              "Build the next generation of innovators."
          },

          {
            title: "Our Values",
            text:
              "Innovation, Discipline, and Creativity."
          }

        ].map((card, i) => (

          <div
            key={i}

            style={{

              padding: "30px",

              borderRadius: "16px",

              background:
                "rgba(255,255,255,0.05)",

              backdropFilter:
                "blur(8px)",

              border:
                "1px solid rgba(255,255,255,0.1)"

            }}
          >

            <h3>{card.title}</h3>

            <p
              style={{
                opacity: 0.8
              }}
            >
              {card.text}
            </p>

          </div>

        ))}

      </div>

    </section>

  );

}