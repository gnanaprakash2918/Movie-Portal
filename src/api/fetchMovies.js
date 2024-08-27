import axios from "axios";

export const fetchMovies = () => {
	const searchText = "Harry Potter 4";

	const url = `https://api.themoviedb.org/3/search/multi?query=${searchText}&include_adult=false&language=en-US&page=1`;

	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`,
		},
	};

	axios.get(url, options).then((response) => {
		console.log(response.data);
	});
};
