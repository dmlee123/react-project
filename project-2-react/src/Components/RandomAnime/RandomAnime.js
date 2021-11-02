import React, {useState} from "react";

const RandomAnime = () => {
const [anime, setRandomAnime] = useState([]);

const handleRandomClick = () => {
	fetch(
		`https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=1`
	)
		.then((response) => response.json())
		.then((data) => setRandomAnime(data.results.slice(0, 1)));
};
const animeJSX = anime.map((anime) => {
	return (
		<div>
			<img src={anime.image_url} alt={anime.rank} /> <p>{anime.title}</p><p>{anime.synopsis}</p>
		</div>
	);
});




    return (
			<div className='RandomAnime'>
				<button onClick={handleRandomClick}>Random Anime</button>
                <button>Add to watch list</button>
				{animeJSX}
			</div>
		);
}

export default RandomAnime;