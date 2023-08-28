import React, { useState } from "react";
import { images } from "../../utils/data";

export const GalleryItem = ({
  src,
  category,
  subtitle,
  title,
  updateActiveImage,
  index,
}) => {
  return (
    <div className="gallery-item-wrapper " data-scroll-section> 
      <div />
      <div className="gallery-item w-[100%] h-[100%] relative will-change-transform">
        <div className="gallery-item-info absolute bottom-[10%] z-10 -translate-x-[20%] text-[#dbd8d6]">
          <h2 className="gallery-info-title leading-[6vw] font-semibold text-[6vw]">
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
const Gallery = () => {
  const [activeImage, setActiveImage] = useState(1);
  return (
    <section className="section-wrapper bg-primaryGreen -mx-[10.6vw] relative" >
      <div className="gallery h-[80vh] py-[10vh] w-[400%] flex flex-nowrap">
        <div className="gallery-counter absolute top-[10%] left-[100px] z-10 font-Lato font-semibold text-base inline-block mix-blend-difference leading-4">
          <span className=" text-white">{activeImage}</span>
          <span className=" divider bg-white w-[6.25vw] my-2 mx-3 h-[1px] inline-block"></span>
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
