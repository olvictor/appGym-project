import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Input from "../Tools/Input";
import styles from "./PhotoPost.module.css";
import UseForm from "../Hooks/UseForm";
import UseFetch from "../Hooks/UseFetch";
import Error from "../Tools/Error";
import { PHOTO_POST } from "../../Api";

const PhotoPost = () => {
  const nome = UseForm();
  const date = UseForm();
  const peso = UseForm();
  const idade = UseForm();
  const [img, setImg] = useState({});
  const { loading, request, error } = UseFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("date", date.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = window.localStorage.getItem("TOKEN");
    const { url, options } = PHOTO_POST(formData, token);
    const { response } = await request(url, options);
  };

  const handleImgChange = ({ target }) => {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  };
  return (
    <section className={styles.contentPhotoPost}>
      {img.preview && <img src={img.preview} alt="Img preview" />}
      <form className={styles.form} onSubmit={handleSubmit}>
        <TypeAnimation
          sequence={["", 1000, "Post your photo !"]}
          wrapper="p"
          cursor={true}
          repeat={0}
          style={{ fontSize: "2rem", display: "inline-block", color: "#fff" }}
        />
        <Input type="text" label="Name" name="Name" {...nome} />
        <Input type="date" label="date" name="date" {...date} />
        <Input type="number" label="peso" name="peso" {...peso} />
        <Input type="number" label="idade" name="idade" {...idade} />
        <input
          type="file"
          label="Select Your Photo :"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? <button disabled>Post...</button> : <button>Post</button>}
        <Error error={error} />
      </form>
    </section>
  );
};

export default PhotoPost;
