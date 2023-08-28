import React from "react";
import { SectionHeader } from "../SectionHeader/SectionHeader";

const About = () => {
  return (
    <section className="about-section" data-scroll-section >
      <SectionHeader title='about'/>
      <p className=" text-5xl leading-tight" id="headline">
        At Greenify, we are more than just an e-commerce website; we are a
        passionate community dedicated to fostering a sustainable and
        eco-friendly lifestyle. Our mission is to empower environmentally
        conscious consumers by offering a curated selection of high-quality,
        sustainable products that inspire positive change and make a difference
        in the world.
      </p>
    </section>
  );
};

export default About;
