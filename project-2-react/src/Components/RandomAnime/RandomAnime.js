import React, { useState, useEffect } from 'react';
import WatchList from '../WatchList/WatchList';
const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require('./client_secret.json');
let doc = {};

const RandomAnime = () => {
	const [anime, setRandomAnime] = useState([]);
	const [selectedAnime, setSelectedAnime] = useState();

	const [name, setName] = useState('');

	const makeInitialCall = async () => {
		doc = new GoogleSpreadsheet('14GY2g8HK9MeBcGz8n499oeCPBShHGyw-2FjUzK9tu2k');
		await doc.useServiceAccountAuth(creds);
		await doc.loadInfo();
		let dataRows = await doc.sheetsByIndex[0].getRows();
		console.log(doc.sheetsByIndex[0]);
		console.log(dataRows);
	};
	useEffect(() => {
		makeInitialCall();
	}, []);

	const handleSubmit = async (title) => {
		setName(title);
		let sheet = await doc.sheetsByIndex[0];
		sheet.addRow({ Name: name });
	};

	const random = Math.floor(Math.random() * 1000);

	const handleRandomClick = () => {
		fetch(`https://api.jikan.moe/v3/anime/${random}`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setRandomAnime(data);
			});
	};


	// old way of adding anime
	// const addAnimeToList = (title,) => {
	// 	console.log(title);
	// 	setSelectedAnime(title);
	// };

	// old of removing anime
	// const removeAnimeFromList = () => {
	// 	setSelectedAnime('');
	// };

	let animeJSX = '';
	if (anime.title) {
		animeJSX = (
			<div className='RandomAnime'>
				<br />
				<img src={anime.image_url} alt={anime.rank} /> <h2>{anime.title}</h2>
				<p>{anime.synopsis}</p>
				<button
					onClick={() => {
						handleSubmit(anime.title);
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
				// removeAnimeFromList={removeAnimeFromList}
			/>
		</div>
	);
};

export default RandomAnime;
