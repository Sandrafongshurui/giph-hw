import React,{useState} from 'react';
import "./Giph.css" 

const Giph = (props) => {
    const[isFavourite, setIsFavourite] = useState(false)

    const handleClick = (evnt) => {
        setIsFavourite(!isFavourite)   
        props.addToFavList(evnt.target.value)   
    }


    return(
        <div className='giph-content'>
            <div>
                <img src={props.srcUrl} alt="random-giphy"/>
            </div>
            <div>
                <button onClick={handleClick} value={isFavourite} >{isFavourite? "like" : "unlike"}</button>
            </div>
            
        </div>
    )
}

export default Giph