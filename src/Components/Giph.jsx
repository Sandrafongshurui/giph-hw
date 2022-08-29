import React, { useState, useEffect } from "react";
import "./Giph.css";

const Giph = (props) => {
  const [isFavourite, setIsFavourite] = useState(false);
  // const[likeStatus, setLikeStatus] = useState(null)

  // //if its fav and is not a new gif
  // console.log("---->", props.giphObj)
  // console.log(isFavourite.display)
  // if(props.giphObj.display && isFavourite.display !== undefined){
  //   console.log("---->", props.giphObj.display)
  //   setIsFavourite(props.giphObj.display)
  //   // props.newLikeStatus(false)
  // }

  // previousGiph = props.srcUrl

  // //if it is liked previously and is a new gif,
  // if(isFavourite && props.srcUrl !== previousGiph ){
  //     //set back to unlike for new giph
  //     setIsFavourite(false)
  // }

  const handleClick = (value) => {
    console.log("hi");
    // setIsFavourite(!value);

    props.onLike({ giphUrl: props.srcUrl, display: value });
  };


  const likeStatus = () => {
    if (props.showLikeBtn) {
      console.log("show like btn");
      return (
        <div>
          <button onClick={handleClick} value={props.showLikeBtn}>
            like
          </button>
        </div>
      );
    } else {
      console.log("show unlike btn");
      return (
        <div>
          <button onClick={handleClick} value={props.giphObj.display}>
            {props.giphObj.display ? "unlike" : "like"}
          </button>
        </div>
      );
    }
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
