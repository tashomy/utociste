import React, { useEffect, useState } from "react";
import "./AllPets.scss";
import preview1 from "../../../assets/bgs/preview-1.jpg";
import preview2 from "../../../assets/bgs/preview-2.jpg";
import preview3 from "../../../assets/bgs/preview-3.jpg";
import preview4 from "../../../assets/bgs/preview-4.jpg";
import preview5 from "../../../assets/bgs/preview-5.jpg";
import PetModal from "./PetModal";
import { useDispatch } from "react-redux";
import { modalActions } from "../../slices/modal";
import { fetchPosts } from "../../services/posts";

const AllPets = () => {
  const dispatch = useDispatch();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetchPosts().then((data) => {
      console.log(data);
      setPets(data.data);
    });
  }, []);

  return (
    <>
      <div className="wrapper-default all-pets-wrapper">
        <div className="container-default all-pets-container">
          <h1 className="primary-heading">Svi ljubimci</h1>
          <div className="all-pets-card-wrapper card-wrapper">
            {pets.map((item, index) => {
              return (
                <div
                  className="card"
                  key={index}
                  onClick={() => dispatch(modalActions.open({ item }))}
                >
                  <div className="header">
                    <img src={item.imageUrl} alt="prev1" />
                  </div>
                  <div className="content">
                    <h4>{item.name}</h4>
                    <div className="details">
                      <p>{item.city}</p>
                      <p>{item.contact}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllPets;
