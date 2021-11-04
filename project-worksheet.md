# Project Overview

## Project Links

- https://dmlee123.github.io/react-project/#/

## Project Description

For my 2nd project, I will attempt to make an random anime generator that also has a "add to list" button. I will try to make the random search customizable by genres. Also if time permits I will try to use another API and do the same thing but with manga.  I will use React and all the hooks (potential more if I have time to research) I have learned so far during lecture.  

## API

https://api.jikan.moe/v3/top/anime


```
top: [
{
mal_id: 5114,
rank: 1,
title: "Fullmetal Alchemist: Brotherhood",
url: "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood",
image_url: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=faffcb677a5eacd17bf761edd78bfb3f",
type: "TV",
episodes: 64,
start_date: "Apr 2009",
end_date: "Jul 2010",
members: 2665843,
score: 9.16
},
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [wireframes](https://wireframepro.mockflow.com/view/MOiKiXwrUmb)
- [react architecture mobile](https://res.cloudinary.com/db4dpaaue/image/upload/v1635537776/IMG_4452_mgkygr.jpg)
- [react architecture Desktop](https://res.cloudinary.com/db4dpaaue/image/upload/v1635537775/IMG_4453_wbbvb0.jpg)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Random Anime generator (possibly manga too)
	- animes populated by API call
    - filter by genres
- add to watch list page
- main page will be page explaining everything
- will continue to update as I build this/get more inspiration

#### PostMVP EXAMPLE

- add a Manga API similiar to the anime one
- add a previous button
- store the selections on google sheets (research more)
- will continue to update if time permits

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | Use React Router here - Link, Route, Redirect, Switch etc | 
| Header | Renders the header | 
| Footer | Renders the footer |
| Main | Brief description of the project |
| RandomAnime | Random anime page with API call |
| RandomManga | Random manga page with API call |
| AnimeList | Add to Watch list with more functionality (tba) |
| MangaList | Add to Read list with more functionality (tba) |

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

Unless otherwise noted, time is listed in hours:

| Component | Priority | Estimated Time | Time Invetsted |
| --- | :---: |  :---: | :---: |
| Setting up React app and files for all components | H | 1 | |  
| Setting up Header & Footer | H | 1 |  |  
| Setting up basic React routing | H | 1 |  |  
| Make Anime generator | H | 3 |  |  
| Make buttons | H | 3 |  |  |
| Make Watch list | H | 3 |  |  
| Attempt to use another API (manga) | M | 5 |  | 
| Doing the same like the Anime API | M | 1 |  |  
| Making everything responsive | H | 4 |  |  
| Styling | L | 10 |  |   
Post MVPS
| Make a "previous button" | H | 5 |  | 
| Storing the selections on google sheets | M | 5 |  | 
| Fancy bootstrap/css animations | L | 5 |  | 



## Additional Libraries
TBA

## Code Snippet
getting my google sheets to work
```javascript

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


```
