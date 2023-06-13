import star from "../../assets/star.svg";
import starFilled from "../../assets/star-filled.svg";

export default function Entries() {
	const date = Date();
	let entries = [
		{
			date: date,
			title: "That's life in the city",
			text: "Here is some text to fill this entry",
			favorite: true,
		},
		{
			date: date,
			title: "That's life in the city Part 2",
			text: "Here is some more text to fill this entry",
			favorite: false,
		},
	];
	return (
		<ul>
			{entries.map((entry) => (
				<li>
					<h5>{entry.date}</h5>
					<h4>{entry.title}</h4>
					<p>{entry.text}</p>
					<img
						src={entry.favorite ? starFilled : star}
						alt={
							entry.favorite
								? "Filled Favorite-Icon (Star)"
								: "Empty Favorite-Icon (Star)"
						}></img>
				</li>
			))}
		</ul>
	);
}
