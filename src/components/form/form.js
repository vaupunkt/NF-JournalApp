export default function Form() {
	return (
		<>
			<h2>New Entry</h2>
			<form className="entryForm">
				<label for="motto">Motto</label>
				<input id="motto" name="motto" required></input>
				<label for="notes">Notes</label>
				<textarea id="notes" name="notes" required></textarea>
				<button type="submit">Create</button>
			</form>
		</>
	);
}
