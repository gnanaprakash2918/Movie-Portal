import axios from "axios";

export const fetchMovies = (searchText, movieCallBack, errorCallBack) => {
	const url = `https://api.themoviedb.org/3/search/multi?query=${searchText}&include_adult=false&language=en-US&page=1&api_key=${process.env.REACT_APP_API_KEY}`;

	axios
		.get(url)
		.then((response) => {
			let resultArr = response.data.results;
			resultArr = resultArr.filter((val) => {
				return val.media_type === "movie" || val.media_type === "tv";
			});

			console.log(resultArr);
		})
		.catch((error) => {
			console.log("Brooo");
		});
};
