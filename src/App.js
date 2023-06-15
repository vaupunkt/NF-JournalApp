import Header from "./components/header/Header.js";
import Form from "./components/form/Form.js";
import Footer from "./components/footer/Footer.js";
import Tabbar from "./components/tabbar/Tabbar.js";
import Entries, { entriesArray } from "./components/entries/Entries.js";
import "./App.css";
import { useState } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

function App() {
	const [entries, setEntries] = useLocalStorageState("entries", {
		defaultValue: entriesArray,
	});
	function handleToggleFavorite(id) {
		setEntries(
			entries.map((entry) =>
				entry.id === id ? { ...entry, isFavorite: !entry.isFavorite } : entry
			)
		);
	}
	function handleAddEntry(newEntry) {
		const date = new Date().toLocaleDateString("en-us", {
			dateStyle: "medium",
		});
		setEntries([{ id: uid(), date: date, ...newEntry }, ...entries]);
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
