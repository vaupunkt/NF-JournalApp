import "./Tabbar.css";
import { TabbbarButton } from "../button/Button.js";

export default function Tabbar({
	getEntries,
	onTabChange,
	isFavoriteTabActive,
	isAllEntryActive,
}) {
	const entryNumber = getEntries.length;
	let counter = getEntries.filter((entry) => entry.isFavorite).length;

	return (
		<section className="tabbar">
			<TabbbarButton
				onTabChange={onTabChange}
				filter={isAllEntryActive}
				badge={entryNumber}
				content="All Entries"></TabbbarButton>
			<TabbbarButton
				onTabChange={onTabChange}
				filter={isFavoriteTabActive}
				badge={counter}
				content="Favorites"></TabbbarButton>
		</section>
	);
}
