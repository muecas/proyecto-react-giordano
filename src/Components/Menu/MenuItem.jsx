import { NavLink } from 'react-router-dom';

/**
 * MenuIem component
 * @param {String}           label
 * @param {String}           to
 * @param {CallableFunction} callback
 * @return {JSX.Element}
 * @constructor
 */

function MenuItem({ label, to, callback }) {
	const attributes = {};
	typeof callback !== 'undefined' && (attributes.onClick = callback);
	return (
		<li className="menu-list-element"><NavLink to={to} className={({ isActive }) => isActive ? 'menu-list-element-link menu-list-element-link--active' : 'menu-list-element-link'} {...attributes}>{label}</NavLink></li>
	);
}

export default MenuItem;