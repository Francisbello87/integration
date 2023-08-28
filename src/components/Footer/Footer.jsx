import React, {useRef} from "react";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import useOnScreen from "../../hooks/useOnScreen";
import cn from 'classnames'

const Footer = () => {
// const [reveal, seReveal] = useState(false)

// const onScreen = useOnScreen(ref)
  return (
    <section className=" footer text-center pb-[200px]" data-scroll-section>
      <SectionHeader title="Made by" />
      <h1  className={cn(" location text-[18vw] uppercase font-Montserrat",)} id="location-text">
        Francis
      </h1>
    </section>
  );
};

export default Footer;
