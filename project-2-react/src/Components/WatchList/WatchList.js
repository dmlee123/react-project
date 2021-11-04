import React from 'react';

const WatchList = (props) => {
	console.log(props);

    
	let watchListJSX = '';
	if (props.selectedAnime) {
		watchListJSX = (
			<>
				<h2>My List</h2>
				<p>
					{props.selectedAnime} &nbsp;
					<button onClick={props.removeAnimeFromList}>Remove from list</button>
				</p>
			</>
		);
	}

	return <div className='WatchList'>{watchListJSX}</div>;
};

export default WatchList;
