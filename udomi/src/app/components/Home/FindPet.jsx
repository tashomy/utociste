import React, { useState } from "react";
import "./FindPet.scss";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const FindPet = () => {
  const [type, setType] = useState("dog");
  return (
    <div className="find-pet-wrapper wrapper-default ">
      <div className="container-default find-pet-container">
        <h1 className="primary-heading">Dodaj novog ljubimca</h1>

        {/* <div className="pet-finder">
          <div className="pet-finder-heading">
            <button
              className={type === "dog" ? "active" : ""}
              onClick={() => setType("dog")}
            >
              <span>Pas</span>
            </button>
            <button
              className={type === "cat" ? "active" : ""}
              onClick={() => setType("cat")}
            >
              <span>Macka</span>
            </button>
            <button
              className={type === "other" ? "active" : ""}
              onClick={() => setType("other")}
            >
              <span>Ostalo</span>
            </button>
          </div>
          <div className="pet-finder-content">
            <Form.Select aria-label="Default select example">
              <option disabled>Grad</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Select aria-label="Default select example">
              <option disabled>Starost</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Select aria-label="Default select example">
              <option disabled>Rasa</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
          <div className="pet-finder-footer">
            <button>Resetuj</button>
            <button>Pronadji</button>
          </div>
        </div> */}

        <Link to={"/dodaj"} className="btn">
          Dodaj
        </Link>
      </div>
    </div>
  );
};

export default FindPet;
