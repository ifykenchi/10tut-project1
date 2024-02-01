import colorNames from "colornames";

const AddColor = ({
	color,
	setColor,
	setHexValue,
	isDarkText,
	setIsDarkText,
}) => {
	return (
		<form className='addForm' onSubmit={(e) => e.preventDefault()}>
			<label htmlFor='addColor'>Add Color Name</label>
			<input
				autoFocus
				id='addColor'
				type='text'
				placeholder='Add color name'
				required
				value={color}
				onChange={(e) => {
					setColor(e.target.value);
					setHexValue(colorNames(e.target.value));
				}}
			/>
			<button type='button' onClick={() => setIsDarkText(!isDarkText)}>
				Toggle Text Color
			</button>
		</form>
	);
};

export default AddColor;
