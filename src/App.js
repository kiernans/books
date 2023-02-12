import React, { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const App = () => {
	const [books, setBooks] = useState([]);

	const createBook = (title) => {
		setBooks([...books, title]);
	};

	return (
		<div>
			<div>Reading List</div>
			<BookList books={books} />
			<BookCreate onCreate={createBook} />
		</div>
	);
};

export default App;
