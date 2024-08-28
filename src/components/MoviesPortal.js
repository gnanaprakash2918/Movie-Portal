import { useState } from "react";
import { fetchMovies } from "../api/fetchMovies";
import ErrorAlert from "./ErrorAlert";

function MoviesPortal() {
	// States
	const [searchInputText, setSearchInputText] = useState("");
	const [enteredSearchText, setEnteredSearchText] = useState("");

	const [movies, setMovies] = useState([]);
	const [error, setError] = useState(null);

	// Function to handle When the user presses "Enter key"
	const onSearchTextEnter = (event) => {
		// Prevent Reload
		event.preventDefault();

		// Fire an API Request with searchInputText
		fetchMovies(searchInputText, setMovies, setError);
		setEnteredSearchText(searchInputText);
	};

	return (
		<>
			<div className="row">
				<div className="col-md-12">
					<form onSubmit={onSearchTextEnter}>
						<input
							type="text"
							placeholder="Search Movie"
							className="form-control"
							value={searchInputText}
							onChange={(event) => setSearchInputText(event.target.value)}
						/>
					</form>
				</div>
			</div>

			<br />
			{error && <ErrorAlert error={error} searchTerm={enteredSearchText} />}
			{movies.length > 0 && (
				<p className="text-light">
					Showing {movies.length} results for '{enteredSearchText}'
				</p>
			)}

			{JSON.stringify(movies)}
			<div>{searchInputText}</div>
		</>
	);
}

export default MoviesPortal;
