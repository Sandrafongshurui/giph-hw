import React, { useState } from "react";

const FavouriteList = (props) => {

  const showHandleClick = (evnt) => {
    if (JSON.parse(evnt.target.getAttribute("displayStatus"))) {
      props.onClick(evnt.target.value);
      console.log(evnt.target.value);
      props.setLikeBtn(JSON.parse(evnt.target.getAttribute("displayStatus")));
    } else {
      props.onClick(evnt.target.value);

      props.setLikeBtn(!JSON.parse(evnt.target.getAttribute("displayStatus")));
    }
  };

  const likeHandleClick = (value) => {
    //remove from favourite list
    props.removeGiph(value);
  };

  const list = props.list.map((item, idx) => {
    return (
      <div key={idx}>
        <p>{item.giphUrl}</p>
        <button
          onClick={showHandleClick}
          value={item.giphUrl}
          displaystatus={item.display.toString()}
        >
          {item.display ? "show" : "hide"}
        </button>
        <button onClick={likeHandleClick} value={item.giphUrl}>
          unlike
        </button>
      </div>
    );
  });

  return (
    <div>
      <h1>Favourites</h1>
      {list}
    </div>
  );
};

export default FavouriteList;
