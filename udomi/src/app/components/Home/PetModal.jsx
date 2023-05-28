import React from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "../../slices/modal";
import "./PetModal.scss";
import preview5 from "../../../assets/bgs/preview-5.jpg";
import { useSelector } from "react-redux";

const PetModal = (props) => {
  const dispatch = useDispatch();
  const petStore = useSelector((store) => store.modal);
  console.log(petStore);
  return (
    <>
      <div className="backdrop"></div>
      <div className="pet-modal-wrapper">
        <div className="pet-modal-container">
          <div className="header">
            <button onClick={() => dispatch(modalActions.close())}>
              Zatvori
            </button>
          </div>
          <div className="content">
            <img src={petStore.pet.item.imageUrl} alt="" />
            <div className="details">
              <div className="detail-group">
                <p>Ime</p>
                <h4>{petStore.pet.item.name}</h4>
              </div>
              <div className="detail-group">
                <p>Starost</p>
                <h4>{petStore.pet.item.age} godina</h4>
              </div>
              <div className="detail-group">
                <p>Grad</p>
                <h4>{petStore.pet.item.city}</h4>
              </div>
              <div className="detail-group">
                <p>Rasa</p>
                <h4>{petStore.pet.item.type}</h4>
              </div>
              <div className="detail-group">
                <p>Kontakt</p>
                <h4>{petStore.pet.item.contact}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetModal;
