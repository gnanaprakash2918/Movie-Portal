import axios from "axios";

export const fetchMovies = (searchText, movieCallBack, errorCallBack) => {
	const url = `https://api.themoviedb.org/3/search/multi?query=${searchText}&include_adult=false&language=en-US&page=1&api_key=${process.env.REACT_APP_API_KEY}`;

	axios
		.get(url)
		.then((response) => {
			let resultArr = response.data.results;

			resultArr = resultArr
				.filter((val) => val.media_type === "movie" || val.media_type === "tv")
				.map((val) => {
					if (val.media_type === "movie") {
						return {
							id: val.id,
							original_title: val.original_title,
							overview: val.overview,
							poster_path: val.poster_path,
							media_type: val.media_type,
							genre_ids: val.genre_ids,
							release_date: val.release_date,
						};
					} else {
						return {
							id: val.id,
							original_name: val.original_name,
							overview: val.overview,
							poster_path: val.poster_path,
							media_type: val.media_type,
							genre_ids: val.genre_ids,
							first_air_date: val.first_air_date,
						};
					}
				});

			// add imdb_id property to each of the objects
			resultArr = resultArr.map((val) => {
				const external_id_url = `https://api.themoviedb.org/3/${val.media_type}/${val.id}/external_ids?api_key=${process.env.REACT_APP_API_KEY}`;

				axios
					.get(external_id_url)
					.then((res) => {
						val.imdb_id = res.data.imdb_id;
					})
					.catch((error) => {
						console.log("Error", error);
					});

				return val;
			});

			if (resultArr.length === 0) {
				movieCallBack([]);
				errorCallBack(Error("No Search Results Found !"));
			} else {
				movieCallBack(resultArr);
				errorCallBack(null);
			}
		})
		.catch((error) => {
			console.log("Error", error);
		});
};
