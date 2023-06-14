import star from "../../assets/star.svg";
import starFilled from "../../assets/star-filled.svg";
import { useState } from "react";

export function SubmitButton({ children }) {
	return (
		<button className="entryForm__button" type="submit">
			{children}
		</button>
	);
}
export let [counter, setCounter] = 0;

export function FavoriteButton() {
	[counter, setCounter] = useState(0);
	const [isFavorite, setFavorite] = useState(false);
	function favoriteEntry() {
		if (isFavorite === true) {
			setFavorite(!isFavorite);
			setCounter(counter - 1);
		} else {
			setFavorite(!isFavorite);
			setCounter(counter + 1);
		}
	}

	return (
		<button className="entryList__entryFavoriteButton" onClick={favoriteEntry}>
			<img
				className="entryList__entryFavoriteButton"
				src={isFavorite ? starFilled : star}
				alt={
					isFavorite
						? "Filled Favorite-Icon (Star)"
						: "Empty Favorite-Icon (Star)"
				}></img>
		</button>
	);
}
