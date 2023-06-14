import { SubmitButton } from "../button/Button.js";
import "./Form.css";

export default function Form({ onAddEntry }) {
	function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);
		onAddEntry(data);
		event.target.reset();
	}

	return (
		<>
			<h2 className="entryForm__title">New Entry</h2>
			<form className="entryForm" onSubmit={handleSubmit}>
				<label className="entryForm__label" htmlFor="motto">
					Motto
				</label>
				<textarea
					rows="1"
					className="entryForm__input"
					id="motto"
					name="motto"
					required></textarea>
				<label className="entryForm__label" htmlFor="notes">
					Notes
				</label>
				<textarea
					className="entryForm__input"
					id="notes"
					name="notes"
					rows="5"
					required></textarea>
				<SubmitButton>Create</SubmitButton>
			</form>
		</>
	);
}
