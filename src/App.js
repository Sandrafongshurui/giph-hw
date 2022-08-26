import FilterForm from "./Components/FilterForm";
import Giph from "./Components/Giph";
import FavouriteList from "./Components/FavouriteList";
import "./App.css";
import axios from 'axios';
import { useEffect, useState } from "react";

const App = () => {
  const [giphUrl, setGiphUrl] = useState(null);
  const [giphObj, setGiphObj] = useState(null);
  const [favouriteGiph, setFavouriteGiph] = useState("")
  // const [favouriteList, setFavouriteList] = useState([])

  //value is from props.submit
  const filterformSubmit = (value) => {
    //value needs to be the query for the fetch api
    console.log("App.js gets the filter input value", value);
    fetchData(
      `https://api.giphy.com/v1/gifs/search?api_key=HSBGTXO0GH0UY3hV8Ar1PT2hi82FZRfA&q=${value}&limit=1&offset=0&rating=g&lang=en`
    , true);
  };

  //use axios, response is change to json already
  const fetchData = async(url, isfilter) => {
    const response = await axios.get(url)
    setGiphObj(response.data)
        
    console.log(response.data)
    if(isfilter){
      setGiphUrl(response.data.data[0].images.fixed_height.url)
    }else{
     setGiphUrl(response.data.data.images.fixed_height.url)

    }
  };

  const addToFavList = (giphObj) => {
    console.log(giphObj)
  
      console.log("set fav giph")
      setFavouriteGiph(giphUrl)
      // setFavouriteList([giphObj, ...favouriteList])
      // setLikeBtn(true)
      return
    
  }




  //get the Giph on mounted
  useEffect(() => {
    console.log("Get a random gif");
    fetchData(
      "https://api.giphy.com/v1/gifs/random?api_key=HSBGTXO0GH0UY3hV8Ar1PT2hi82FZRfA&limit=1&rating=g"
    , false);
  }, [favouriteGiph]);


  // useEffect(() => {
  //   setLikeBtn(false)
  // }, [favouriteList]);

  return (
    <div className="App">
      <h1>Lets Giphy!</h1>
      <div>
        <FilterForm onSubmit={filterformSubmit}/>
      </div>
      <br/>
      <br/>
      <div>
        {giphUrl && (//if is true, execute the giph component
          <Giph srcUrl={giphUrl} giphObj={giphObj} onLike={addToFavList} />
        )}
      </div>
      <br/>
      <br/>
      <div>
        {/* {<FavouriteList list={favouriteList} onClick={(value) => setGiphUrl(value)}/>} */}
      </div>
    </div>
  );
};

export default App;
