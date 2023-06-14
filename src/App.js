import Header from "./components/header/Header.js";
import Form from "./components/form/Form.js";
import Footer from "./components/Footer/Footer.js";
import Tabbar from "./components/tabbar/Tabbar.js";
import Entries, { entriesArray } from "./components/entries/Entries.js";
import "./App.css";
import { useState } from "react";
import { uid } from "uid";

function App() {
	const [entries, setEntries] = useState(entriesArray);
	function handleToggleFavorite(id) {
		setEntries(
			entries.map((entry) =>
				entry.id === id ? { ...entry, isFavorite: !entry.isFavorite } : entry
			)
		);
	}
	function handleAddEntry(newEntry) {
		const newDate = new Date();
		const monthNames = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dez",
		];
		const month = newDate.getMonth();
		let date =
			monthNames[month] +
			" " +
			newDate.getDate() +
			", " +
			newDate.getFullYear();
		console.log(date);
		setEntries([...entries, { id: uid(), date: date, ...newEntry }]);
	}

	const [favoriteTabActive, setFavoriteTabActive] = useState(false);
	const [allEntryTabActive, setAllEntryTabActive] = useState(true);
	function handleTabChange() {
		setFavoriteTabActive(!favoriteTabActive);
		setAllEntryTabActive(!allEntryTabActive);
	}

	return (
		<>
			<Header />
			<main>
				<Form onAddEntry={handleAddEntry} />
				<Tabbar
					getEntries={entries}
					onTabChange={handleTabChange}
					isFavoriteTabActive={favoriteTabActive}
					isAllEntryActive={allEntryTabActive}
				/>
				<Entries
					onToggleFavorite={handleToggleFavorite}
					entries={entries}
					onTabChange={handleTabChange}
					isFavoriteTabActive={favoriteTabActive}
					isAllEntryActive={allEntryTabActive}
				/>
			</main>
			<Footer />
		</>
	);
}

export default App;
