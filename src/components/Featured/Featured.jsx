import React from "react";
import PENS from "../../assets/fea.png";
import Fea from "../../assets/flower.png";
import '../Featured/Featured.scss'

const Featured = () => {
  return (
    <section
      className="featured-section"
      data-scroll-section
    >
      <div className=" featured-row-layout">
        <h5>Lilac</h5>
        <img
          data-scroll
          // src="https://images.unsplash.com/photo-1588477000993-460d2257f88a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZsb3dlcnxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60"
          src={PENS}
          alt=""
        />
      </div>
      <div className=" featured-column-layout">
        <h5 >
          Bamboo
        </h5>
        <img
          data-scroll
          src="https://images.unsplash.com/photo-1613539246066-78db6ec4ff0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
    </section>
  );
};

export default Featured;
