import React, {useState,useEffect} from 'react';

export default function MyComponent() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
		.then(res => res.json())
		.then(
			(result) => {
				setIsLoaded(true);
				setItems(result);
			},
			(error) => {
				setIsLoaded(true);
				setError(error);
			}
		)
	}, [])

	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		return (
			<ul>
				{items.map(item => (
					<li key={item.id}>{item.title} {item.body}</li>
				))}
			</ul>
		);
	}
}