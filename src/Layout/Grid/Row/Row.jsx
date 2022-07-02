import './Row.scss';

/**
 * Row component
 * @param {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */

function Row({ alignItems, jusifyContent, children }) {
	const attributes = {
		className : 'ui-row' +
			(alignItems ? ` ui-row-align-items-${alignItems}` : null) +
			(alignItems ? ` ui-row-justify-content-${jusifyContent}` : null)
	};
	return (
		<div {...attributes}>
			{children}
		</div>
	);
}

export default Row;