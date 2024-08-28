const ErrorAlert = () => {
	return (
		<div className="alert alert-dismissible alert-danger">
			<button
				type="button"
				className="btn-close"
				data-bs-dismiss="alert"
			></button>
			<strong>Oh snap!</strong>{" "}
			<a href="/" className="alert-link">
				Change a few things up
			</a>{" "}
			and try submitting again.
		</div>
	);
};

export default ErrorAlert;
