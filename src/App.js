import FilterForm from "./Components/FilterForm";
import Giph from "./Components/Giph";
import FavouriteList from "./Components/FavouriteLIst";
import "./App.css";
import axios from 'axios';
import { useEffect, useState } from "react";

const App = () => {
  const [giphContent, setGiphContent] = useState(null);
  const [favouriteGiph, setFavouriteGiph] = useState("")

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

  const addFavGiphToList = (value) => {
    if(value){
      setFavouriteGiph(giphContent.data[0].images.fixed_height.url)
    }
  }



  //get the Giph on mounted
  useEffect(() => {
    console.log("1st round use effect to get data, get my random gif");
    fetchData(
      "https://api.giphy.com/v1/gifs/trending?api_key=HSBGTXO0GH0UY3hV8Ar1PT2hi82FZRfA&limit=1&rating=g"
    );
  }, []);

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
          <Giph srcUrl={giphContent.data[0].images.fixed_height.url} addToFavList={addFavGiphToList} />
        )}
      </div>
      <br/>
      <br/>
      <div>
        <FavouriteList addFavGiph={favouriteGiph}/>
      </div>
    </div>
  );
};

export default App;
