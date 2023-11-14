import { ReactNode } from 'react';
import { APIError } from '../hooks/useCustomFetch';

const CustomSuspense = ({
	children,
	error,
	isLoading,
}: {
	children: ReactNode;
	error?: APIError;
	isLoading: boolean;
}) => {
	if (isLoading) return <div>Loading...</div>;
	if (error) {
		const { status, message } = error;

		return (
			<div>
				에러가 발생하였습니다.. 다시 시도할까요? CODE: {status} | MESSAGE:{' '}
				{message}
				<button
					onClick={() => {
						window.location.reload();
					}}
				>
					Refresh
				</button>
			</div>
		);
	}

	return <>{children}</>;
};

export default CustomSuspense;
