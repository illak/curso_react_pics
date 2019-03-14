import React, { useState } from 'react';
import unsplash from '../api/unsplash';

import SearchBar from './SearchBar';
import ImageList from './ImageList';

const App = () => {
	const [images, setImages] = useState([]);

	const onSearchSubmit = term => {
		unsplash
			.get('/search/photos', {
				params: { query: term }
			})
			.then(res => {
				setImages(res.data.results);
			});
	};

	return (
		<div className='ui container' style={{ marginTop: '10px' }}>
			<SearchBar onSubmit={onSearchSubmit} />
			<ImageList images={images} />
		</div>
	);
};

export default App;
