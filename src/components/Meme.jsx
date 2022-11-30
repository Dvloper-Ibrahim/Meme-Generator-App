import React from "react";
// import memesData from "../memesData"

export default function () {
  // let memesArray = memesData.data.memes, random;
  let random;
  let [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
  let [allMemes, setallMemes] = React.useState([]);
  React.useEffect(() => {
    async function getData() {
      // Fetching an api to get about 100 meme images to work on
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setallMemes(data.data.memes);
    }
    getData();
  }, []);
  function getMemeImage() {
    random = Math.floor(Math.random() * allMemes.length);
    // Vanilla JS Solution
    /*
      memeImage = document.getElementById('meme');
      memeImage.setAttribute('src', memesData.data.memes[random].url);
    */

    // React.useState() Solution
    let url = allMemes[random].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
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
          type="text"
          className="input1"
          placeholder="Top Text"
          name="topText"
          onChange={handleChange}
        />
        <input
          type="text"
          className="input2"
          placeholder="Bottom Text"
          name="bottomText"
          onChange={handleChange}
        />
        <button onClick={getMemeImage}>Get a new meme image 🖼</button>
      </div>
      <div className="meme-container">
        <img src={meme.randomImage} id="meme-image" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
