import React, { useState } from 'react';
import './ImageSlider.css';
function ImageSlider() {

  const imgs = [
    { id: 0, value: "images/img1.jpg" },
    { id: 1, value: "images/img2.jpg" },
    { id: 2, value: "images/img3.jpg" },
    { id: 3, value: "images/img4.jpg" },
  ]

  const [wordData, setWordData] = useState(imgs[0]);
  const handleClick = (index) => {
    console.log(index)
    const wordSlider = imgs[index];
    setWordData(wordSlider)
  }
  return (
    <div className="main">
      <img src={wordData.value} height={180} width={320} alt=" " />
      <div className='flex_row'>
        {imgs.map((data, i) =>
          <div className="thumbnail" key={i} >
            <img className={wordData.id === i ? "clicked" : ""} src={data.value} onClick={() => handleClick(i)} height="50" width="70" alt=" " />
          </div>
        )}
      </div>
      <p>  </p>
    </div>
  );
}

export default ImageSlider;
