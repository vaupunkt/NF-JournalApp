import star from "../../assets/star.svg";
import starFilled from "../../assets/star-filled.svg";

export function SubmitButton({ children }) {
	return (
		<button className="entryForm__button" type="submit">
			{children}
		</button>
	);
}

export function FavoriteButton({ onToggleFavorite, id, isFavorite }) {
	return (
		<button
			className="entryList__entryFavoriteButton"
			onClick={() => onToggleFavorite(id)}>
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
