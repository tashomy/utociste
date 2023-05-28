import React from "react";
import "./About.scss";
import { Link } from "react-router-dom";
import img from "../../../assets/bgs/about.jpg";

const About = () => {
  return (
    <div className="wrapper-default contact-wrapper">
      <div className="container-default contact-container">
        <div className="contact-utociste">
          <h2>Kontaktirajte nas</h2>
          <Link to="mailto:kasalicanebojsa230@gmail.com?subject=Kontakt&body=Ostavite poruku za nas">
            email
          </Link>
        </div>
        <div className="about-utociste">
          <div className="about-utociste-left">
            <h3>O nama</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
              architecto veritatis dolor soluta omnis consectetur sunt in
              cupiditate laudantium commodi!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sint
              vitae sunt? Ex, enim mollitia magnam quod illo similique
              voluptatibus, explicabo quasi numquam aspernatur quibusdam iusto,
              nulla corporis a quia?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              repellat, odio eum optio non eaque!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
              architecto veritatis dolor soluta omnis consectetur sunt in
              cupiditate laudantium commodi!
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              repellat, odio eum optio non eaque!
            </p>
          </div>
          <div className="about-utociste-right">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
