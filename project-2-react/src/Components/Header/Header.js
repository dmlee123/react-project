import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
	return (
		<Navbar bg="primary" variant="dark" sticky= "top">
			<Container>
				<Navbar.Brand href = "/">Random Anime</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className='justify-content-end'>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
