import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";
import { useState } from "react";

import ScrollCamera from "./ScrollCamera";
import Hallway from "./Hallway";
import Header from "./Header";
import Hero from "./Hero";
import ClassroomDesks from "./ClassroomDesks";
import Blackboard from "./Blackboard";
import CourseBoard from "./CourseBoard";
import Windows from "./Window";
import TeacherDesk from "./TeacherDesk";
import ClassroomBags from "./ClassroomBags";
import CompanySection from "./CompanySection";
import Footer from "./Footer";
import Popup from "./Popup";
import { ScrollProvider } from "./ScrollStore";

export default function App() {
  const [activeCourse, setActiveCourse] = useState(null);

  return (
    <ScrollProvider>
      <Header />
      <Hero />
      
      <Canvas
        style={{ 
          width: "100vw", 
          height: "100vh", 
          position: "fixed", 
          top: 0, 
          left: 0,
          pointerEvents: "none" 
        }}
        camera={{ position: [0, 2, 5] }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />

        {/* pages={5} provides the total scroll depth */}
        <ScrollControls pages={5} damping={0.2}>
          
          <ScrollCamera />
          
          {/* 3D Scene components */}
          <Hallway />
          <Windows />
          <ClassroomDesks />
          <ClassroomBags />
          <Courses setActiveCourse={setActiveCourse} />
          <TeacherDesk />
          <Blackboard />

          <Scroll html style={{ width: "100%", pointerEvents: "auto" }}>
            <div style={{ width: "100vw" }}>
              {/* With pages={5}, 400vh is the 'bottom' of the 3D journey.
                  The HTML content starts at exactly 400vh, so it remains 
                  off-screen until the camera has reached the end.
              */}
              <div style={{ height: "400vh" }} /> 
              
              <div style={{ 
                width: "100%", 
                minHeight: "100vh", 
                background: "white", // Solid background to hide the 3D scene
                position: "relative",
                zIndex: 10,
                boxShadow: "0px -30px 60px rgba(0,0,0,0.2)"
              }}>
                <CompanySection />
                <Footer />
              </div>
            </div>
          </Scroll>

        </ScrollControls>
      </Canvas>

      <Popup title={activeCourse} />
    </ScrollProvider>
  );
}

function Courses({ setActiveCourse }) {
  const courses = [
    { title: "Web Development", image: "/posters/web.png" },
    { title: "Game Development", image: "/posters/game.png" },
    { title: "AI & ML", image: "/posters/ai.png" },
    { title: "Cyber Security", image: "/posters/cyber.png" },
    { title: "Cloud Computing", image: "/posters/cloud.png" },
    { title: "Data Science", image: "/posters/data.png" }
  ];

  return (
    <>
      {courses.map((course, i) => (
        <CourseBoard
          key={i}
          position={[i % 2 === 0 ? -4 : 4, 1.8, -i * 10 - 10]}
          title={course.title}
          image={course.image}
          setActiveCourse={setActiveCourse}
        />
      ))}
    </>
  );
}