import React from "react";
import Card from "./Card";

import image1 from "../assets/image1.jpg";
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const cards = [
  {
    id: 1,
    title: "Coffe Damian",
    image: image1,
    url: "https://faztweb.comhttps://webcoffe-sitie.netlify.app/",
  },
  {
    id: 2,
    title: "Damian Blog",
    image: image2,
    url: "https://portafolio-damian-calderon.netlify.app/",
  },
  {
    id: 3,
    title: "Damian Youtube",
    image: image3,
    url: "https://www.youtube.com/channel/UCdd94BAEwYRvukaqgR0R1vg",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
