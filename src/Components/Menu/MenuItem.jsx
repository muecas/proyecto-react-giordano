/**
 * MenuIem component
 * @param {String}           label
 * @param {String}           href
 * @param {CallableFunction} callback
 * @return {JSX.Element}
 * @constructor
 */

function MenuItem({ label, href, callback }) {
	const attributes = {};
	typeof href !== 'undefined' && (attributes.href = href);
	typeof callback !== 'undefined' && (attributes.onClick = callback);
	return (
		<li className="menu-list-element"><a {...attributes}>{label}</a></li>
	);
}

export default MenuItem;