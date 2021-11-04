import React, { useState } from 'react';
import WatchList from '../WatchList/WatchList';

const RandomAnime = () => {
	const [anime, setRandomAnime] = useState([]);
	const [selectedAnime, setSelectedAnime] = useState();

	const random = Math.floor(Math.random() * 1000);

	const handleRandomClick = () => {
		fetch(`https://api.jikan.moe/v3/anime/${random}`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setRandomAnime(data);
			});
	};

	//this gets me a string which I was able to successfully use to add to my list but not sure how to add multiples
	const addAnimeToList = (title,) => {
		console.log(title);
		setSelectedAnime(title);
	};

	const removeAnimeFromList = () => {
		setSelectedAnime('');
	};

	let animeJSX = '';
	if (anime.title) {
		animeJSX = (
			<div className='RandomAnime'>
				<br />
				<img src={anime.image_url} alt={anime.rank} /> <h2>{anime.title}</h2>
				<p>{anime.synopsis}</p>
				<button
					onClick={() => {
						addAnimeToList(anime.title);
					}}>
					Add to List
				</button>
			</div>
		);
	}

	return (
		<div className='RandomAnime'>
			<button onClick={handleRandomClick}>Random Anime </button>
			{animeJSX}
			<WatchList
				selectedAnime={selectedAnime}
				removeAnimeFromList={removeAnimeFromList}
			/>
		</div>
	);
};

export default RandomAnime;
