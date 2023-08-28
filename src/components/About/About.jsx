import React, { useEffect, useRef, useState } from "react";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import useOnScreen from "../../hooks/useOnScreen";
import SplitText from "../../../gsap-bonus/package/SplitText";
import cn from "classnames";
import { gsap } from "gsap";

const About = () => {
  const ref = useRef();
  const [reveal, setReveal] = useState(false);
  const OnScreen = useOnScreen(ref);

  useEffect(() => {
    if (OnScreen) setReveal(OnScreen);
  }, [OnScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#headline", {
        type: "lines",
        linesClass: "lineChildren",
      });

      gsap.to(split.lines, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 0.1,
        ease: " power2",
      });
    }
  }, [reveal]);

  return (
    <section className="about-section" data-scroll-section>
      <SectionHeader title="about" />
      <p
        ref={ref}
        className={cn(" text-5xl leading-tight", { "is-reveal": reveal })}
        id="headline"
      >
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
