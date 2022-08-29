import React, { useState } from "react";

const FavouriteList = (props) => {
 // let [display, setDisplay] = useState(false);

  const handleClick = (evnt) => {
    props.onClick(evnt.target.value);
    console.log(!evnt.target.getAttribute("status"))
    props.setShowLikeBtn(!evnt.target.getAttribute("status"))
    // const obj = evnt.target.value
   // props.giphObj({giphObj:evnt.target.value, display:evnt.target.getAttribute("status")})
    //setDisplay(!display);
    // console.log(evnt.target.getAttributes(""))
  };

  const list = props.list.map((item, idx) => {
    console.log(item)
    return (<div key={idx}>   
      <p>{item.giphUrl}</p>
      <button onClick={handleClick} value={item.giphUrl} status={item.display.toString()}>
        {item.display ? "show" : "hide"}
      </button>
      {/* <img src={item.giphUrl} alt="fav"></img> */}
    </div>)
});

  return (
    <div>
      <h1>Favourites</h1>
      {list}
    </div>
  );
};

export default FavouriteList;
