import './App.css';
import React, { useState } from 'react';
import RandomAnime from './Components/RandomAnime/RandomAnime';
import Main from './Components/Main.js/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {



  
	return (
		<div className='App'>
			<nav>

      </nav>
      <Header />
      <Main />
      <main>
      <RandomAnime />
      </main>
      <Footer />
		</div>
	);
}

export default App;
