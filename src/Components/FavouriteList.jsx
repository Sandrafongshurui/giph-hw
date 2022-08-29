import React, { useState } from "react";

const FavouriteList = (props) => {
 let [display, setDisplay] = useState(false);

  const handleClick = (evnt) => {
    if(JSON.parse(evnt.target.getAttribute("displayStatus"))){
      props.onClick(evnt.target.value);
      console.log(evnt.target.value)
      props.setLikeBtn(JSON.parse(evnt.target.getAttribute("displayStatus")))
    }else{
      props.onClick(evnt.target.value);
      
      props.setLikeBtn(!JSON.parse(evnt.target.getAttribute("displayStatus")))
    }
  
  };

  const list = props.list.map((item, idx) => {
    console.log(item)
    return (<div key={idx}>   
      <p>{item.giphUrl}</p>
      <button onClick={handleClick} value={item.giphUrl} displaystatus={item.display.toString()}>
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
