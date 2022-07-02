import './Container.scss';

/**
 * Container component
 * @param {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */

function Container({ children }) {
	return (
		<div className="ui-container">
			{children}
		</div>
	);
}

export default Container;