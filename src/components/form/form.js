import { SubmitButton } from "../button/button.js";

export default function Form() {
	return (
		<>
			<h2 className="entryForm__title">New Entry</h2>
			<form className="entryForm">
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
