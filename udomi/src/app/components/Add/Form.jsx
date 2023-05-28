import React, { useState } from "react";
import "./Form.scss";
import { createPost } from "../../services/posts";
import { useNavigate } from "react-router";

const Form = () => {
  const navigate = useNavigate();
  const [url, setUrl] = useState("");
  const [post, setPost] = useState({
    name: "",
    age: 0,
    city: "",
    type: "",
    contact: "",
    animal: "",
    imageUrl: "",
    created: new Date(),
  });

  const sendPost = (e) => {
    e.preventDefault();
    createPost(post).then((data) => console.log(data));
    window.scrollTo(0, 0);
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <div className="wrapper-default add-form-wrapper">
      <div className="container-default add-form-container">
        <h5 className="secondary-heading">Dodaj ljubimca</h5>
        <form>
          <div className="add-form-group">
            <label htmlFor="add-form-name">Ime</label>
            <input
              type="text"
              id="add-form-name"
              onChange={(e) => setPost({ ...post, name: e.target.value })}
            />
          </div>
          <div className="add-form-group">
            <label htmlFor="add-form-age">Starost (godine)</label>
            <input
              type="number"
              id="add-form-age"
              onChange={(e) => setPost({ ...post, age: e.target.value })}
            />
          </div>
          <div className="add-form-group">
            <label htmlFor="add-form-city">Grad</label>
            <input
              type="text"
              id="add-form-city"
              onChange={(e) => setPost({ ...post, city: e.target.value })}
            />
          </div>
          <div className="add-form-group">
            <label htmlFor="add-form-animal">Životinja</label>
            <input
              type="text"
              id="add-form-animal"
              onChange={(e) => setPost({ ...post, animal: e.target.value })}
            />
          </div>
          <div className="add-form-group">
            <label htmlFor="add-form-type">Rasa</label>
            <input
              type="text"
              id="add-form-type"
              onChange={(e) => setPost({ ...post, type: e.target.value })}
            />
          </div>
          <div className="add-form-group">
            <label htmlFor="add-form-contact">Kontakt</label>
            <input
              type="text"
              id="add-form-contact"
              onChange={(e) => setPost({ ...post, contact: e.target.value })}
            />
          </div>
          <div className="add-form-group">
            <label htmlFor="add-form-image">Url slika</label>
            <input
              type="text"
              id="add-form-image"
              onBlur={(e) => setUrl(e.target.value)}
              onChange={(e) => setPost({ ...post, imageUrl: e.target.value })}
            />
          </div>
        </form>
        {url !== "" && <img src={url} alt="pet" />}
        <button className="btn" onClick={sendPost}>
          Postavi
        </button>
      </div>
    </div>
  );
};

export default Form;
