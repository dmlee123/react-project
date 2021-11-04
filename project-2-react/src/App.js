import './App.css';
import RandomAnime from './Components/RandomAnime/RandomAnime';
import Main from './Components/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './Components/Footer/Footer.css';
import './Components/Header/Header.css';
import './Components/Main/Main.css';
import './Components/RandomAnime/RandomAnime.css';
import { Link, Route } from 'react-router-dom';
import WatchList from './Components/WatchList/WatchList';
import './Components/WatchList/WatchList.css';

function App() {
	return (
		<div className='App'>
			<nav>
				<Link to='/'></Link>
			</nav>

			<main>
				<Route path='/' component={Header} />
				<Route exact path='/' component={Main} />
				<Route exact path='/RandomAnime' component={RandomAnime} />
				<Route exact path='/WatchList' component={WatchList} />
			</main>

			<footer>
				<Route path='/' component={Footer} />
			</footer>
		</div>
	);
}

export default App;
