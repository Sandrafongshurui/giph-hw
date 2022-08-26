import React, { useState} from "react";
import "./Giph.css";

const Giph = (props) => {
  const [isFavourite, setIsFavourite] = useState({ giphUrl: "", like: null });
  // setIsFavourite(props.likeBtn)
  // let previousGiph = useRef()

  // previousGiph = props.srcUrl

  // //if it is liked previously and is a new gif,
  // if(isFavourite && props.srcUrl !== previousGiph ){
  //     //set back to unlike for new giph
  //     setIsFavourite(false)
  // }

  const handleClick = () => {
    console.log(props.giphObj);
    setIsFavourite({ giphUrl: props.srcUrl, like: true });
    props.onLike(props.giphObj);
  };

  return (
    <div className="giph-content">
      <div>
        <img src={props.srcUrl} alt="random-giphy" />
      </div>
      <div>
        {/* <button onClick={handleClick} value={isFavourite.like}>
          {isFavourite.like ? "unlike" : "like"}
        </button> */}
      </div>
    </div>
  );
};

export default Giph;
