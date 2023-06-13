import { FavoriteButton } from "../button/button.js";

export let entries = [
	{
		id: 1000,
		date: "Feb 5, 2025",
		motto: "We are in a state of chaos",
		notes:
			"Today I learned about React State. It was fun! I can't wait to learn more.",
	},
	{
		id: 999,
		date: "Feb 4, 2025",
		motto: "Props, Props, Props",
		notes:
			"Today I learned about React Props. Mad props to everyone who understands this!",
	},
	{
		id: 998,
		date: "Feb 3, 2025",
		motto: "How to nest components online fast",
		notes:
			"Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
	},
	{
		id: 997,
		date: "Feb 2, 2025",
		motto: "I'm a React Developer",
		notes: "My React-ion when I learned about React: 😍",
	},
];

export default function Entries() {
	return (
		<ul className="entryList">
			<MapEntries />
		</ul>
	);
}

function MapEntries() {
	const entriesReturn = entries.map((entry, index) => (
		<>
			<li className="entryList__entry" key={entry.id}>
				<h5 className="entryList__entryDate">{entry.date}</h5>
				<h4 className="entryList__entryMotto">
					"<strong>{entry.motto}</strong>"
				</h4>
				<p className="entryList__entryNote">{entry.notes}</p>
				<FavoriteButton />
			</li>
			<Divider />
		</>
	));

	return entriesReturn;
}

function Divider() {
	return <hr className="entryList__divider"></hr>;
}
