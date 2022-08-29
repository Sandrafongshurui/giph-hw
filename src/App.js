import FilterForm from "./Components/FilterForm";
import Giph from "./Components/Giph";
import FavouriteList from "./Components/FavouriteList";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  //const [giphUrl, setGiphUrl] = useState({giphUrl:"", display:false});
  const [giphObj, setGiphObj] = useState({ giphUrl: "", display: false });
  const [favouriteGiph, setFavouriteGiph] = useState({});
  const [favouriteList, setFavouriteList] = useState([]);
  const [likeBtn, setLikeBtn] = useState(true);

  //value is from props.submit
  const filterformSubmit = (value) => {
    //value needs to be the query for the fetch api
    console.log("App.js gets the filter input value", value);
    fetchData(
      `https://api.giphy.com/v1/gifs/search?api_key=HSBGTXO0GH0UY3hV8Ar1PT2hi82FZRfA&q=${value}&limit=1&offset=0&rating=g&lang=en`,
      true
    );
  };

  //use axios, response is change to json already
  const fetchData = async (url, isfilter) => {
    const response = await axios.get(url);
    console.log(response.data);
    if (isfilter) {
      //setGiphUrl(response.data.data[0].images.fixed_height.url)
      setGiphObj({
        giphUrl: response.data.data[0].images.fixed_height.url,
        display: true,
      });
    } else {
      //setGiphUrl(response.data.data.images.fixed_height.url)
      setGiphObj({
        giphUrl: response.data.data.images.fixed_height.url,
        display: true,
      });
    }
  };

  const addToFavList = (giphObj) => {
    console.log("set fav giph");
    setFavouriteGiph(giphObj);
    setFavouriteList([giphObj, ...favouriteList]);
  };

  const removeFromFavList = (giphUrl) => {
    const list = [...favouriteList];
    let removeIndx = null
    list.forEach((item, idx) => {
      if (giphUrl === item.giphUrl) {
        removeIndx =  idx
      }
    });
    list.splice(removeIndx,1)
    console.log(list);
    setFavouriteList([...list]);
    if(giphUrl === giphObj.url){
      fetchData(
        "https://api.giphy.com/v1/gifs/random?api_key=HSBGTXO0GH0UY3hV8Ar1PT2hi82FZRfA&limit=1&rating=g",
        false
      );
    }

  };

  const clickShowHideBtn = (value) => {
    const isShowing = favouriteList.find((item) => item.giphUrl === value); //clickng the hide btn, value is the current url
    //means clicking hide button
    if (!isShowing.display) {
      fetchData(
        "https://api.giphy.com/v1/gifs/random?api_key=HSBGTXO0GH0UY3hV8Ar1PT2hi82FZRfA&limit=1&rating=g",
        false
      );
      const list = [...favouriteList];
      list.forEach((item) => {
        item.display = true;
      });
      setFavouriteList([...list]);
    } else {
      setGiphObj({ giphUrl: value, display: !likeBtn }); //value will be the url
      console.log(!likeBtn);
      const list = [...favouriteList];
      list.forEach((item) => {
        item.display = true;
        //hide button is avail
        if (value === item.giphUrl && isShowing.display) {
          item.display = !likeBtn;
          // setLikeStatus(true)
        }
        //set current like status to true, its going to show a favourite
        setFavouriteList([...list]);
      });
    }
  };

  //get the Giph on mounted
  useEffect(() => {
    console.log("Get a random gif");
    fetchData(
      "https://api.giphy.com/v1/gifs/random?api_key=HSBGTXO0GH0UY3hV8Ar1PT2hi82FZRfA&limit=1&rating=g",
      false
    );
  }, [favouriteGiph]);

  return (
    <div className="App">
      <h1>Lets Giphy!</h1>
      <div>
        <FilterForm onSubmit={filterformSubmit} />
      </div>
      <br />
      <br />
      <div>
        {giphObj.giphUrl && ( //if is true, execute the giph component
          <Giph
            srcUrl={giphObj.giphUrl}
            giphObj={giphObj}
            onLike={addToFavList}
            showLikeBtn={likeBtn}
          />
        )}
      </div>
      <br />
      <br />
      <div>
        {
          <FavouriteList
            list={favouriteList}
            onClick={clickShowHideBtn}
            setLikeBtn={(value) => setLikeBtn(value)}
            removeGiph={removeFromFavList}
          />
        }
      </div>
    </div>
  );
};

export default App;
