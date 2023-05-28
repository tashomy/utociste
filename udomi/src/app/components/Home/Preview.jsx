import React, { useEffect, useState } from "react";
import "./Preview.scss";
import { Carousel } from "react-bootstrap";
import preview1 from "../../../assets/bgs/preview-1.jpg";
import preview2 from "../../../assets/bgs/preview-2.jpg";
import preview3 from "../../../assets/bgs/preview-3.jpg";
import preview4 from "../../../assets/bgs/preview-4.jpg";
import preview5 from "../../../assets/bgs/preview-5.jpg";
import { fetchPosts } from "../../services/posts";

const Preview = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetchPosts().then((data) => {
      console.log(data);
      const sortedDate = data.data
        .sort(function (a, b) {
          return new Date(b.created) - new Date(a.created);
        })
        .slice(0, 5);
      setPets(sortedDate);
    });
  }, []);

  return (
    <div className="home-preview-wrapper wrapper-default">
      <div className="home-preview-container container-default">
        <h1 className="primary-heading">Mi smo utočište</h1>
        <p className="primary-text">
          Organizacija koja će Vam pomoći da pronađete svog{" "}
          <span>idealnog ljubimca</span>
        </p>
        <div className="carousel-wrapper">
          <Carousel fade controls={false} indicators={true}>
            {pets.map((item, index) => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={item.imageUrl}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>{item.name}</h3>
                    <p>{item.contact}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
          <p className="italic-text">Najnoviji ljubimci</p>
        </div>
      </div>
    </div>
  );
};

export default Preview;
