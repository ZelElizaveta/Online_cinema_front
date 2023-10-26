import { FC } from 'react';
import ReduxToastr from 'react-redux-toastr';

const ReduxToast: FC = () => {
	return (
		<ReduxToastr
			timeOut={4000}
			newestOnTop={false}
			preventDuplicates
			position="top-left"
			transitionIn="fadeIn"
			transitionOut="fadeOut"
			progressBar={true}
			closeOnToastrClick
		/>
	);
};

export default ReduxToast;
