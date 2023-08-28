import React from "react";
import PENS from "../../assets/fea.png";
import Fea from "../../assets/flower.png";

const Featured = () => {
  return (
    <section
      className="featured-section uppercase text-xl "
      data-scroll-section
    >
      <div className=" featured-row-layout">
        <h5>Lilac</h5>
        <img
          data-scroll
          src={PENS}
          alt=""
        />
      </div>
      <div className=" featured-column-layout">
        <h5 className=" translate-x-full -rotate-90  justify-self-end">
          Bamboo
        </h5>
        <img
          data-scroll
          src={Fea}
          alt=""
        />
      </div>
    </section>
  );
};

export default Featured;
