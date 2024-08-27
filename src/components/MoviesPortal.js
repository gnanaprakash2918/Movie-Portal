import { useState } from "react";
import { fetchMovies } from "../api/fetchMovies";

function MoviesPortal() {
	const [searchInputText, setSearchInputText] = useState("");
	const [enteredSearchText, setEnteredSearchText] = useState("");

	const onSearchTextEnter = (event) => {
		event.preventDefault();
		setEnteredSearchText(searchInputText);
	};

	fetchMovies();

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

			<div>{searchInputText}</div>
		</>
	);
}

export default MoviesPortal;
