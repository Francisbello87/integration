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
          src="https://images.unsplash.com/photo-1431263154979-0982327fccbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zmxvd2VyfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
      <div className=" featured-column-layout">
        <h5 className=" translate-x-full -rotate-90  justify-self-end">
          Bamboo
        </h5>
        <img
          data-scroll
          src="https://images.unsplash.com/photo-1532009871151-e1958667c80d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZsb3dlcnxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
    </section>
  );
};

export default Featured;
