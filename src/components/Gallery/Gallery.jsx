import React, { useEffect, useState, useRef } from "react";
import { images } from "../../utils/data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import ScrollTrigger from "../../../gsap-bonus/package/ScrollTrigger";
import cn from "classnames";
import useOnScreen from "../../hooks/useOnScreen";
import "../../components/Gallery/Gallery.scss";

// gsap.registerPlugin(ScrollTrigger);

export const GalleryItem = ({ src, title, updateActiveImage, index }) => {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);
  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);
  return (
    <div
      ref={ref}
      className={cn("gallery-item-wrapper ", { "is-reveal": onScreen })}
    >
      <div />
      <div className="gallery-item ">
        <div className="gallery-item-info ">
          <h2 className="gallery-info-title ">
            {title}
          </h2>
        </div>
        <div
          style={{ backgroundImage: `url(${src})` }}
          className="gallery-item-image"
        ></div>
      </div>
      <div />
    </div>
  );
};

const Gallery = ({ src, index, columnOffset }) => {
  const [activeImage, setActiveImage] = useState(1);
  const ref = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      const sections = gsap.utils.toArray(".gallery-item-wrapper");
;
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          start: "top 900",
          trigger: ref.current,
          scroller: "#main-container",
          pin: true,
          scrub: 0.5,
          markers: true,
          snap: 1 / (sections.length - 1),
          end: () => `+=${ref.current.offsetWidth}`,
          // end: 'bottom 10000',
        },
      });
      ScrollTrigger.refresh();
    });
  }, []);

  return (
    <section data-scroll-section className="section-wrapper gallery-wrap ">
      <div ref={ref} className="gallery">
        <div className="gallery-counter ">
          <span className=" text-white">{activeImage}</span>
          <span className=" divider bg-white w-[6.25vw] "></span>
          <span className=" text-white">{images.length}</span>
        </div>
        {images.map((image, index) => (
          <GalleryItem
            key={image.src}
            index={index}
            {...image}
            updateActiveImage={(index) => setActiveImage(index + 1)}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
