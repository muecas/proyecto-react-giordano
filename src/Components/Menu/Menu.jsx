import './Menu.scss';

/**
 * Nav component
 * @param {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */

function Menu({ children }) {
	return (
		<div className="menu-container">
			<ul className="menu-list">
				{children}
			</ul>
		</div>
	);
}

export default Menu;