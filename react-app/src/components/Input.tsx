import { useCallback } from 'react';

interface Props {
	label?: string;
	placeholder?: string;
	value?: string;
	onChange: (value: string) => void;
}

function Input({ value, label, placeholder, onChange }: Props) {
	const handleChange = useCallback(
		({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
			onChange(value);
		},
		[],
	);

	return (
		<>
			{label && <label htmlFor="input-검색">{label}</label>}
			<input
				type="text"
				id="input-검색"
				value={value}
				placeholder={placeholder}
				onChange={handleChange}
			/>
		</>
	);
}

export default Input;
