import './ItemList.scss';

/**
 * ItemList component
 * @param {String}      title
 * @param {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */

function ItemList({ title, children } = { title : 'Bienvenidos' }) {
	return (
		<div className="item-list">
			<h2 className="item-list-title">{title}</h2>
			{children}
		</div>
	);
}

export default ItemList;