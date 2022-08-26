import FilterForm from "./Components/FilterForm";
import Giph from "./Components/Giph";
import FavouriteList from "./Components/FavouriteList";
import "./App.css";
import axios from 'axios';
import { useEffect, useState } from "react";

const App = () => {
  const [giphContent, setGiphContent] = useState(null);
  const [favouriteGiph, setFavouriteGiph] = useState("")
  const [like, setLikeBtn] = useState(false)

  //value is from props.submit
  const filterformSubmit = (value) => {
    //value needs to be the query for the fetch api
    console.log("App.js gets the filter input value", value);
    fetchData(
      `https://api.giphy.com/v1/gifs/search?api_key=HSBGTXO0GH0UY3hV8Ar1PT2hi82FZRfA&q=${value}&limit=1&offset=0&rating=g&lang=en`
    );
  };


  // const fetchData = (url) => {
  //   fetch(url)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((respJson) => {
  //       setGiphContent(respJson); // this is setting the state of giphContent, which is the response of the fetch data
  //     });
  // };

  //use axios, response is change to json already
  const fetchData = async(url) => {
    const response = await axios.get(url)
    setGiphContent(response.data)
    console.log(response.data)
  };

  const addToFavList = (value) => {
    console.log(value)
    if(value.like){
      console.log("set fav giph")
      setFavouriteGiph(giphContent.data.images.fixed_height.url)
      setLikeBtn(value.like)
      //get new gif
      return
    }
    setLikeBtn(!value.like)
  }




  //get the Giph on mounted
  useEffect(() => {
    console.log("1st round use effect to get data, get my random gif");
    fetchData(
      "https://api.giphy.com/v1/gifs/random?api_key=HSBGTXO0GH0UY3hV8Ar1PT2hi82FZRfA&limit=1&rating=g"
    );
  }, [favouriteGiph]);


  // useEffect(() => {
  //   if(like){
      
  //   }

  // }, [like]);

  return (
    <div className="App">
      <h1>Lets Giphy!</h1>
      <div>
        <FilterForm onSubmit={filterformSubmit}/>
      </div>
      <br/>
      <br/>
      <div>
        {giphContent && (//if is true, execute the giph component
          <Giph srcUrl={giphContent.data.images.fixed_height.url} addToFavList={addToFavList} />
        )}
      </div>
      <br/>
      <br/>
      <div>
        <FavouriteList selectedGiph={like? favouriteGiph : ""} isUpdated={(value) => setLikeBtn(value)}/> 
      </div>
    </div>
  );
};

export default App;
