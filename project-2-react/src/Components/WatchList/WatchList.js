import React from "react";

const WatchList = (props) => {
    console.log(props)
    return (
        <div className = "WatchList">
            <h2><br />Watch List</h2>
         <li>{props.selectedAnime}</li>
        </div>
    )
}

export default WatchList;