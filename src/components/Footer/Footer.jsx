import React, { useRef, useEffect, useState } from "react";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import useOnScreen from "../../hooks/useOnScreen";
import cn from "classnames";
import SplitText from "../../../gsap-bonus/package/SplitText";
import { gsap } from "gsap";
import './Footer.scss'
gsap.registerPlugin(SplitText);

const Footer = () => {
  const ref = useRef();
  const [reveal, setReveal] = useState(false);
  const OnScreen = useOnScreen(ref);

  useEffect(() => {
    if (OnScreen) setReveal(OnScreen);
  }, [OnScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#location-text", {
        type: "lines",
        linesClass: "lineChildren",
      });

      const splitParent = new SplitText("#location-text", {
        type: "lines",
        linesClass: "lineParent",
      });

      gsap.fromTo(split.lines, {y:200}, {
        duration: 1,
        y: 0,
        stagger: 0.1,
        ease: "power2",
      });
    }
  }, [reveal]);
  return (
    <section className=" footer text-center pb-[200px]" data-scroll-section>
      <SectionHeader title="Made by" />
      <h1
        ref={ref}
        className={cn(
          "location-text location font-Montserrat",
          { "is-reveal": reveal }
        )}
        id="location-text"
      >
        Francis
      </h1>
    </section>
  );
};

export default Footer;
