import React, { useState, useEffect } from "react";
import "./Giph.css";

const Giph = (props) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const handleClick = (value) => {
    console.log("hi");
    // setIsFavourite(!value);

    props.onLike({ giphUrl: props.srcUrl, display: props.giphObj.display});
  };


  const likeStatus = () => {
    return (
      <div>
        <button onClick={handleClick} value={props.giphObj.display.toString()}>
          {props.giphObj.display ? "like" : "unlike"}
        </button>
      </div>
    );
  };

  return (
    <div className="giph-content">
      <div>
        <img src={props.srcUrl} alt="random-giphy" />
      </div>
      <div>{likeStatus()}</div>
    </div>
  );
};

export default Giph;
