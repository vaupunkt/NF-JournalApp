import Header from "./components/header.js";
import Form from "./components/form/form.js";
import Footer from "./components/footer.js";
import Tabbar from "./components/tabbar/tabbar.js";
import Entries, { entriesArray } from "./components/entries/entries.js";
import "./global.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";

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
		setEntries([...entries, { id: uuid(), date: date, ...newEntry }]);
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
