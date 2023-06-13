import Header from "./components/header.js";
import Form from "./components/form/form.js";
import Footer from "./components/footer.js";
import Tabbar from "./components/tabbar/tabbar.js";
import Entries from "./components/entries/entries.js";
import "./global.css";

function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<Form />
				<Tabbar />
				<Entries />
			</main>
			<Footer />
		</div>
	);
}

export default App;
