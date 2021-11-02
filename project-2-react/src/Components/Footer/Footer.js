import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const Footer = () => {
	return (
		<Navbar bg='primary' variant='dark' fixed = "bottom">
			<Container>
				<Navbar.Brand>Daniel Lee</Navbar.Brand>
				<Nav className='me-auto'>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Footer;
