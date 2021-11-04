import React from "react";

const WatchList = (props) => {
    console.log(props)
    return (
        <div className = "WatchList">
            <h2><br />My List</h2>
         <p>{props.selectedAnime} </p>
        </div>
    )
}

export default WatchList;