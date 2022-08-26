import {useState } from "react";

const FavouriteList = (props) => {
    const [favouriteList, setfavouriteList] = useState([ ]);
    const [giphStr, setGiphStr] = useState("")

//    if(props.selectedGiph !== "" ){
//     console.log("add to list")
//     // props.clickLike(!props.likeValue)
//     setfavouriteList([props.selectedGiph, ...favouriteList])
//     props.isUpdated (true)
//    }
    
    // favouriteList.splice(props.selectedGiph)

    // favouriteList.map((item) => 
    // <div>item</div>
    // )
    console.log("first render",favouriteList)



    return(
        <div>
             {favouriteList.map((item) => 
                <div>item</div>
                )}
        </div>
   
    )

}

export default FavouriteList