import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
	return (
		<p>
			Hello! This app will randomly generate an <strong>anime</strong> which you can then add to
			a watch list. Click the image below to continue!
			<div>
				<Link to='/RandomAnime'>
					<img
						src='https://www.ft.com/__origami/service/image/v2/images/raw/https%253A%252F%252Fs3-ap-northeast-1.amazonaws.com%252Fpsh-ex-ftnikkei-3937bb4%252Fimages%252F5%252F3%252F5%252F8%252F28668535-1-eng-GB%252F%25E3%2582%25BD%25E3%2583%258B%25E3%2583%25BC%25E4%25B8%258A%25EF%25BC%2589%25E8%25BF%25BD%25E5%258A%25A0%25E3%2580%2580%25E9%25AC%25BC%25E6%25BB%2585%25E3%2581%25AE%25E5%2588%258320200805183428557_Data.jpg?width=700&fit=cover&gravity=faces&dpr=2&quality=medium&source=nar-cms'
						alt=''
					/>
				</Link>
			</div>
		</p>
	);
};

export default Main;
