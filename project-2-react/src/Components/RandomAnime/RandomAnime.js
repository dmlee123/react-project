import React, { useState } from 'react';

const RandomAnime = () => {
	const [anime, setRandomAnime] = useState([]);
	const [addAnime, SetAddAnime] = useState([]);

	const handleRandomClick = () => {
		fetch(
			`https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=1`
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
				setRandomAnime(data.results)
			});
		};

const addAnimeToList = () => {
		console.log(addAnime)
		SetAddAnime(addAnime);
	};


	const animeJSX = anime.map((anime) => {
		return (
			<div>
				<img src={anime.image_url} alt={anime.rank} /> <p>{anime.title}</p>
				<p>{anime.synopsis}</p>
				<button onClick = {addAnimeToList}>Add to Watch List</button>
			</div>
		);
	});

	

	return (
		<div className='RandomAnime'>
			<button onClick={handleRandomClick}>Random Anime</button>
			{animeJSX}

		</div>
	);
};

export default RandomAnime;
