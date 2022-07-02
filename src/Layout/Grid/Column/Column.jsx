import './Column.scss';

/**
 * Column component
 * @param {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */

function Column({ children }) {
	return (
		<div className="ui-column">
			{children}
		</div>
	);
}

export default Column;