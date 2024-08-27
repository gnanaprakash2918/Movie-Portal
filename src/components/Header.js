function Header() {
	return (
		<nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="/">
					Movie Portal
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarColor02"
					aria-controls="navbarColor02"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
			</div>
		</nav>
	);
}

export default Header;
