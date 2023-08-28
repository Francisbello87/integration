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
          src="https://images.unsplash.com/photo-1535850836387-0f9dfce30846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
      <div className=" featured-column-layout">
        <h5 className=" translate-x-full -rotate-90  justify-self-end">
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
