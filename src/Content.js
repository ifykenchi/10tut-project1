const Content = ({ color, hexValue, isDarkText }) => {
	return (
		<main
			style={{ backgroundColor: color, color: isDarkText ? "#000" : "#FFF" }}
		>
			<p>{color ? color : "Empty Value"}</p>
			<p>{hexValue ? hexValue : null}</p>
		</main>
	);
};

Content.defaultProps = {
	colorValue: "Empty Color Value",
};

export default Content;
