import './Column.scss';

/**
 * Column component
 * @param {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */

function Column({ className, children }) {
	const attributes = {
		className : 'ui-column' +
			(className ? ` ${className}` : '')
	};
	return (
		<div {...attributes}>
			{children}
		</div>
	);
}

export default Column;