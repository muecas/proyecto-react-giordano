import './Row.scss';

/**
 * Row component
 * @param {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */

function Row({ className, alignItems, jusifyContent, children }) {
	const attributes = {
		className : 'ui-row' +
			(className ? ` ${className}` : '') +
			(alignItems ? ` ui-row-align-items-${alignItems}` : '') +
			(jusifyContent ? ` ui-row-justify-content-${jusifyContent}` : '')
	};
	return (
		<div {...attributes}>
			{children}
		</div>
	);
}

export default Row;