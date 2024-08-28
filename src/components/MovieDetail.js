const MovieDetail = ({ movie }) => {
	return (
		<>
			{movie.poster_path && (
				<>
					<div className="row">
						<div className="col-md-2">
							<img
								src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
								alt={movie.title}
								width="100%"
							/>
						</div>

						<div className="col-md-10">
							<div className="card">
								<div className="card-body">
									<h3 className="card-title">{movie.original_title}</h3>
									<h6 className="card-subtitle mb-2 text-muted">
										{movie.release_date}
									</h6>
									<p className="card-text">{movie.overview}</p>
									<a
										href={`https://www.imdb.com/title/${movie.imdb_id}/`}
										target="_blank"
										className="card-link"
										rel="noopener noreferrer"
									>
										IMDB
									</a>
									<a
										href={`https://www.youtube.com/results?search_query=${movie.original_title} trailer`}
										target="_blank"
										className="card-link"
										rel="noopener noreferrer"
									>
										Watch Trailer
									</a>
								</div>
							</div>
						</div>
					</div>
					<br />
				</>
			)}
		</>
	);
};

export default MovieDetail;
