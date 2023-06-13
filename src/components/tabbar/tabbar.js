import { entries } from "../entries/entries.js";

export default function Tabbar() {
	const entryNumber = entries.length;
	return (
		<section className="tabbar">
			<section className="tabbar__tab tabbar__tab--active">
				<h3>All Entries</h3>
				<span className="badge">{entryNumber}</span>
			</section>
			<section className="tabbar__tab">
				<h3>Favorites</h3>
				<span className="badge">0</span>
			</section>
		</section>
	);
}
