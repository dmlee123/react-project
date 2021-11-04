import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav className= "Nav">
			<a id = "home" href='/'>Home</a>
			<Link to='/WatchList'> Watch List</Link>
		</nav>
	);
};

export default Header;
