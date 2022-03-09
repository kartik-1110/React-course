import React, { useState } from "react";
import "../index.css";
import memesData from "../memesData";

function Meme() {
  // this will display on the page
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/2fm6x.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  // function for getting random images
  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  // onChange function
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          name="topText"
          value={meme.topText}
          className="form-control"
          placeholder="Top text"
          onChange={handleChange}
          type="text"
        />
        <input
          name="bottomText"
          value={meme.bottomText}
          className="form-control"
          placeholder="Bottom text"
          onChange={handleChange}
          type="text"
        />
        <button className="form-btn" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <div className="meme-body">
        <img src={meme.randomImage} className="meme-img" />
        <h2 className="meme-txt top">{meme.topText}</h2>
        <h2 className="meme-txt bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
