import React, {useState, useEffect} from "react";
import "./Giph.css";

const Giph = (props) => {
  const [isFavourite, setIsFavourite] = useState({giphObj:{}, display:false});
  const[likeStatus, setLikeStatus] = useState(null)

  //if its fav and is not a new gif
  console.log("---->", props.giphObj)
  console.log(isFavourite.display)
  if(props.giphObj.display && isFavourite.display !== undefined){
    console.log("---->", props.giphObj.display)
    setIsFavourite(props.giphObj.display)
    // props.newLikeStatus(false)
  }
 

  // previousGiph = props.srcUrl

  // //if it is liked previously and is a new gif,
  // if(isFavourite && props.srcUrl !== previousGiph ){
  //     //set back to unlike for new giph
  //     setIsFavourite(false)
  // }

  const handleClick = (value) => {
    console.log("hi");
    setIsFavourite(!props.giphObj);
    //setGiph({giphObj:props.giphObj, like:true})
    props.onLike(props.giphObj);
  };
  ///if fav gif is set, means a new gif is called, means the unlike shld be like
  // useEffect(() => {
  //   setIsFavourite({ giphUrl: "", like: false })
  // }, [isFavourite]);

  return (
    <div className="giph-content">
      <div>
        <img src={props.srcUrl} alt="random-giphy" />
      </div>
      <div>
        <button onClick={handleClick} value={isFavourite.display}>
          {isFavourite.display? "unlike" : "like"}
          
        </button>
      </div>
    </div>
  );
};

export default Giph;
