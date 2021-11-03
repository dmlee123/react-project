import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav className= "Nav">
			<a href='/'>Random Anime Generator</a>
			<Link to='/WatchList'> Watch List</Link>
		</nav>
	);
};

export default Header;
