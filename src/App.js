import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import ReactNotification from 'react-notifications-component'
import Qualification from "./components/Education";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
            <ReactNotification/>

      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Qualification />
      <Contact />
    </main>
  );
}
