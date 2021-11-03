import React, { useState } from 'react';
import WatchList from '../WatchList/WatchList';

const RandomAnime = () => {
	const [anime, setRandomAnime] = useState([]);

	const random = Math.floor(Math.random() * 1000);

	const handleRandomClick = () => {
		fetch(`https://api.jikan.moe/v3/anime/${random}`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setRandomAnime(data);
			});
	};

	const addAnimeToList = () => {
		console.log(anime);
	};

	const animeJSX = (
		<div className='RandomAnime'>
			<img src={anime.image_url} alt={anime.rank} /> <h2>{anime.title}</h2>
			<p>{anime.synopsis}</p>
			<button onClick={addAnimeToList}>Add to Watch List</button>
		</div>
	);

	return (
		<div className='RandomAnime'>
			<button onClick={handleRandomClick}>Random Anime</button>
			{animeJSX}
		</div>
	);
};

export default RandomAnime;
