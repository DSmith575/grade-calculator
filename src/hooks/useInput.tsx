import { ChangeEvent, useState } from "react";

const useInputField = (initialValue: number) => {
	const [value, setValue] = useState(initialValue);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const input = event.target.value;
		const parseInput = parseFloat(input);
		setValue(parseInput);
	};

	return { onChange: handleChange, value };
};

export default useInputField;
