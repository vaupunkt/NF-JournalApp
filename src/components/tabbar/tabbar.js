import "./Tabbar.css";

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
			<section
				onClick={onTabChange}
				className={
					isAllEntryActive ? "tabbar__tab tabbar__tab--active" : "tabbar__tab"
				}>
				<h3>All Entries</h3>
				<span className="badge">{entryNumber}</span>
			</section>
			<section
				onClick={onTabChange}
				className={
					isFavoriteTabActive
						? "tabbar__tab tabbar__tab--active"
						: "tabbar__tab"
				}>
				<h3>Favorites</h3>
				<span className="badge">{counter}</span>
			</section>
		</section>
	);
}
