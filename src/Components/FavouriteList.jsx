import React from "react";

const FavouriteList = (props) => {
  //let [favouriteList, setfavouriteList] = useState([ ]);

const handleClick = (evnt) => {
    props.onClick(evnt.target.value)
    const obj = evnt.target.value
    console.log(obj)
   
}

  const list = props.list.map((item, idx) => (
    <div key={idx}>
        <p>{item.data.user.display_name}</p>
        <button onClick={handleClick} value={item.data.images.fixed_height.url}>switch</button>
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
