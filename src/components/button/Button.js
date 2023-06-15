import star from "../../assets/star.svg";
import starFilled from "../../assets/star-filled.svg";
import "./Button.css";

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

export function TabbbarButton({ onTabChange, filter, badge, content }) {
	return (
		<button
			onClick={onTabChange}
			className={filter ? "tabbar__tab tabbar__tab--active" : "tabbar__tab"}>
			<h3>{content}</h3>
			<span className="badge">{badge}</span>
		</button>
	);
}
