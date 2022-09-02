import React, { useState } from "react";
import "./Giph.css";

const Giph = (props) => {
  const [isloaded, setIsLoaded] = useState(false)

  const handleClick = (value) => {
    console.log("click unlike from main giph ");
    props.onToggleBtn({ giphUrl: props.srcUrl, display: props.giphObj.display});
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
        {isloaded? null :<p>Loading...</p> }
        <img  style={isloaded? {} : { display: 'none' }} src={props.srcUrl} alt="random-giphy" onLoad={()=>setIsLoaded(true)} />
        
      </div>
      <div>{likeStatus()}</div>
    </div>
  );
};

export default Giph;
