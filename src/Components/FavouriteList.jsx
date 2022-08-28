import React, {useState} from "react";

const FavouriteList = (props) => {
  let [display, setDisplay] = useState(false);

const handleClick = (evnt) => {
    props.onClick(evnt.target.value)
    // const obj = evnt.target.value
    //set favlist again
    setDisplay(!display)
    // console.log(evnt.target.getAttributes(""))   
}

  const list = props.list.map((item, idx) => (
    <div key={idx}>
        <p>{item.giphObj.data.user.display_name}</p>
        <button onClick={handleClick} value={item.giphObj.data.images.fixed_height.url}>{item.display? "show":"hide"}</button>
      {/* <img src={item.giphUrl} alt="fav"></img> */}
    </div>
  ));

  return (
    <div>
      <h1>Favourites</h1>
      {list}
    </div>
  );
};

export default FavouriteList;
