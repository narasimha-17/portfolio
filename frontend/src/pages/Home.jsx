import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Specialties from "../components/Specialties";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Internships from "../components/Internships";
import Recognition from "../components/Recognition";
import ContactForm from "../components/ContactForm";

import projects from "../data/projects";
import skills from "../data/skills";
import internships from "../data/internships";
import recognitions from "../data/recognitions";

export default function Home(){
  return (
    <div>
      <Navbar />
      
      <br />
      <br />
      <main className="max-w-7xl mx-auto px-6">
        <Hero />
        <Specialties />
        <Projects items={projects} />
        <Skills items={skills} />
        <Internships items={internships} />
        <Recognition items={recognitions} />
        <ContactForm />
      </main>
    </div>
  );
}
