import './ItemList.scss';

/**
 * ItemList component
 * @param {String} title
 * @return {JSX.Element}
 * @constructor
 */

function ItemList({ title } = { title : 'Bienvenidos' }) {
	return (
		<div className="item-list">
			<h2 className="item-list-title">{title}</h2>
		</div>
	);
}

export default ItemList;