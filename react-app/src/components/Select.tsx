import { useCallback } from "react";

interface Props {
	options: Array<{ label: string; value: string }>;
	onClick: (value: string) => void;
}

function Select({ options, onClick }: Props) {
	const handleClick = useCallback((selected: string) => {
		onClick(selected);
	}, []);

	return (
		<ul>
			{options.map((row) => (
				<li key={row.value}>
					<button type="button" onClick={() => handleClick(row.value)}>
						{row.label}
					</button>
				</li>
			))}
		</ul>
	);
}

export default Select;
