/**
 * MenuIem component
 * @param {String}           label
 * @param {String}           href
 * @param {CallableFunction} callback
 * @param {String}           icon
 * @return {JSX.Element}
 * @constructor
 */

function MenuItem({ label, href, callback, icon }) {
	const attributes = {};
	typeof href !== 'undefined' && (attributes.href = href);
	typeof callback !== 'undefined' && (attributes.onClick = callback);
	return (
		<li className={'menu-list-element' + (icon ? ' menu-list-element-icon' : '')}><a {...attributes}>{icon ? <img src={icon} alt={label} /> : label}</a></li>
	);
}

export default MenuItem;