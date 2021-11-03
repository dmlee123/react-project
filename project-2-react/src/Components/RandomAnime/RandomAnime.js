import React, { useState } from 'react';
import WatchList from '../WatchList/WatchList';

const RandomAnime = () => {
	const [anime, setRandomAnime] = useState([]);
	const [addAnime, SetAddAnime] = useState([]);

	const random = Math.floor(Math.random() * 500);

	const handleRandomClick = () => {
		fetch(`https://api.jikan.moe/v3/anime/${random}`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setRandomAnime(data);
			});
	};

	const addAnimeToList = () => {
		console.log(addAnime);
		SetAddAnime(addAnime);
	};

	const animeJSX = (
		<div>
			<img src={anime.image_url} alt={anime.rank} /> <p>{anime.title}</p>
			<p>{anime.synopsis}</p>
			<button onClick={addAnimeToList}>Add to Watch List</button>
		</div>
	);

	return (
		<div className='RandomAnime'>
			<button onClick={handleRandomClick}>Random Anime</button>
			{animeJSX}
			<WatchList />
		</div>
	);
};

export default RandomAnime;
