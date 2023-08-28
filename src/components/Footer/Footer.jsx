import React from "react";
import { SectionHeader } from "../SectionHeader/SectionHeader";

const Footer = () => {
  return (
    <section className=" footer text-center pb-[200px]" data-scroll-section>
      <SectionHeader title="Made by" />
      <h1 className=" location text-[18vw] uppercase font-Montserrat" id="location-text">
        Francis
      </h1>
    </section>
  );
};

export default Footer;
