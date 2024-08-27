import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/vapor/bootstrap.min.css";

import Header from "./components/Header";
import MoviesPortal from "./components/MoviesPortal";

function App() {
	return (
		<div className="App">
			<Header />
			<br />
			<div className="container">
				<MoviesPortal />
			</div>
		</div>
	);
}

export default App;
