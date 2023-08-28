import React, { useRef, useEffect, useState } from "react";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import useOnScreen from "../../hooks/useOnScreen";
import cn from "classnames";
import SplitText from '../../../gsap-bonus/package/SplitText'
import { gsap } from "gsap";
gsap.registerPlugin(SplitText)

const Footer = () => {
  const [reveal, seReveal] = useState(false)
const ref = useRef()
  const onScreen = useOnScreen(ref)
  useEffect(() => {
    const split = new SplitText("#location-text ", {
      type: "lines",
      linesClass: "lineChildren",
    });
    const splitParent = new SplitText("#location-text ", {
      type: "lines",
      linesClass: "lineParent",
    });

    gsap.fromTo(split.lines, {
      y: 500,
    }, {
      duration:1,
      y:0,
      stagger: 0.1,
      ease:'power2'
    });
  }, []);
  return (
    <section className=" footer text-center pb-[200px]" data-scroll-section>
      <SectionHeader title="Made by" />
      <h1
      ref={ref}
        className={cn("location-text location text-[18vw] uppercase font-Montserrat", {'is-reveal': reveal})}
        id="location-text"
      >
        Francis
      </h1>
    </section>
  );
};

export default Footer;
