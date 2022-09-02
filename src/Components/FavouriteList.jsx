import React from "react";

const FavouriteList = (props) => {
  //console.log(props.list)
  const showHandleClick = (evnt) => {
    props.onClick(evnt.target.value);
    //let displayStatus = JSON.parse(evnt.target.getAttribute("displayStatus"))
    //props.setLikeBtn(displayStatus);
  };

  const unlikeHandleClick = (evnt) => {
    //remove from favourite list
    console.log(evnt.target.value)
    props.removeGiph(evnt.target.value);
  };

  const list = props.list.map((item, idx) => {
    //console.log(item)
    return (
      <div key={idx}>
        <p>{item.giphUrl}</p>
        <button
          onClick={showHandleClick}
          value={item.giphUrl}
          // displaystatus={item.display.toString()}
        >
          {item.display ? "show" : "hide"}
        </button>
        <button onClick={unlikeHandleClick} value={item.giphUrl}>
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
