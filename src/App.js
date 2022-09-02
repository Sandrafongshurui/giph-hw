import FilterForm from "./Components/FilterForm";
import Giph from "./Components/Giph";
import FavouriteList from "./Components/FavouriteList";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [giphObj, setGiphObj] = useState({ giphUrl: "", display: false });
  const [favouriteGiph, setFavouriteGiph] = useState({});
  const [favouriteList, setFavouriteList] = useState([]);
  const [likeBtn, setLikeBtn] = useState(true);

  const url =
    "https://api.giphy.com/v1/gifs/random?api_key=HSBGTXO0GH0UY3hV8Ar1PT2hi82FZRfA&limit=1&rating=g";

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
      setGiphObj({
        giphUrl: response.data.data[0].images.fixed_height.url,
        display: true,
      });
    } else {
      setGiphObj({
        giphUrl: response.data.data.images.fixed_height.url,
        display: true,
      });
    }
  };

  const onToggleBtn = (isBtnLike, giphObj) => {
    isBtnLike?  addToFavList(giphObj) : removeFromFavList(giphObj.giphUrl)
  }

  const addToFavList = (giphObj) => {
    console.log("set fav giph");
    setFavouriteGiph(giphObj);
    setFavouriteList([giphObj, ...favouriteList]);
  };

  const removeFromFavList = (giphUrl) => {
    //checkif its currently showing
    if (giphUrl === giphObj.giphUrl) {
      console.log("current showings")
      fetchData(url, false);
    }
    const list = [...favouriteList];
    let removeIndx = list.findIndex((item) => {
      return item.giphUrl === giphUrl
    })
    list.splice(removeIndx, 1);
    console.log(list);
    setFavouriteList([...list]);
<<<<<<< HEAD
=======

>>>>>>> 68cc1ff9c5c30f6f75eacc184ce991c5fbbb5b97
  };

  const clickShowHideBtn = (value) => {
    let list = [...favouriteList];
    let idx = null
    //find giph that is being currently clicked
    const itemUserClick = list.filter((item, idnx) => {
       //must be both show btn and is the clicked item
      if (item.giphUrl === value && item.display) {
        idx = idnx
        console.log("item clicked has show btn")
        return item
      };
      
    });
    list.forEach((item) => item.display = true)
    if (itemUserClick.length>0) {
        //value will be the url
        setGiphObj({ giphUrl: value, display: !likeBtn });
        //set current like status to true, its going to show a favourite
        console.log("selected item ---->", list[idx])
        list[idx].display = !likeBtn
    
    } else { 
      //means clicking hide button 
      // get a new gif
      console.log("item clicked has hide btn, get a new gif")
      fetchData(url, false);

    }
    setFavouriteList([...list])
    console.log(list)
  };

  //get the Giph on mounted
  useEffect(() => {
    console.log("Get a random gif");
    fetchData(url, false);
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
            onToggleBtn={onToggleBtn}
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
