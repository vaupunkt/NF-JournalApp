import { FavoriteButton } from "../button/Button.js";
import "./Entries.css";

export let entriesArray = [
	{
		id: 1000,
		isFavorite: false,
		date: "Feb 5, 2025",
		motto: "We are in a state of chaos",
		notes:
			"Today I learned about React State. It was fun! I can't wait to learn more.",
	},
	{
		id: 999,
		isFavorite: false,
		date: "Feb 4, 2025",
		motto: "Props, Props, Props",
		notes:
			"Today I learned about React Props. Mad props to everyone who understands this!",
	},
	{
		id: 998,
		isFavorite: true,
		date: "Feb 3, 2025",
		motto: "How to nest components online fast",
		notes:
			"Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
	},
	{
		id: 997,
		isFavorite: false,
		date: "Feb 2, 2025",
		motto: "I'm a React Developer",
		notes: "My React-ion when I learned about React: 😍",
	},
];

export default function Entries({
	entries,
	onToggleFavorite,
	onTabChange,
	isFavoriteTabActive,
	isAllEntryActive,
}) {
	function AllEntries() {
		return (
			<ul
				className={
					isAllEntryActive ? "entryList entryList--active" : "entryList"
				}>
				{entries.map(({ id, date, motto, notes, isFavorite }) => (
					<>
						<li className="entryList__entry" key={id}>
							<h5 className="entryList__entryDate">{date}</h5>
							<h4 className="entryList__entryMotto">
								"<strong>{motto}</strong>"
							</h4>
							<p className="entryList__entryNote">{notes}</p>
							<FavoriteButton
								onToggleFavorite={onToggleFavorite}
								id={id}
								isFavorite={isFavorite}
							/>
						</li>
						<Divider />
					</>
				))}
			</ul>
		);
	}

	function FavoriteEntries() {
		return (
			<ul
				className={
					isFavoriteTabActive ? "entryList entryList--active" : "entryList"
				}>
				{entries
					.filter((entry) => entry.isFavorite)
					.map(({ id, date, motto, notes, isFavorite }) => (
						<>
							<li className="entryList__entry" key={id}>
								<h5 className="entryList__entryDate">{date}</h5>
								<h4 className="entryList__entryMotto">
									"<strong>{motto}</strong>"
								</h4>
								<p className="entryList__entryNote">{notes}</p>
								<FavoriteButton
									onToggleFavorite={onToggleFavorite}
									id={id}
									isFavorite={isFavorite}
								/>
							</li>
							<Divider />
						</>
					))}
			</ul>
		);
	}
	return (
		<>
			<AllEntries />
			<FavoriteEntries />
		</>
	);
}

function Divider() {
	return <hr className="entryList__divider"></hr>;
}
