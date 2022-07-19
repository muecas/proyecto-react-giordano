import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Row, Column } from '../../../Layout/Grid';
import AppPaths from '../../../Services/Utils/AppPaths';

import './Item.scss';

/**
 * Item component
 * @param {Number} id
 * @param {String} title
 * @param {String} slug
 * @param {String} image
 * @param {String} description
 * @param {Number} price
 * @param {Number} stock
 * @return {JSX.Element}
 * @constructor
 */

function Item({ id, title, slug, image, description, price, stock }) {
	const imgEl = useRef(null);
	function showImage() {
		imgEl.current.parentNode.classList.add('list-item-element-image--loaded');
	}
	return (
		<div className="list-item-element">
			<Row>
				<Link to={AppPaths.products(slug)} className="list-item-element-link">Ver detalle de producto</Link>
				<div className="list-item-element-button-holder">
					<div className="list-item-element-button">Ver detalle de producto</div>
				</div>
				<Column className="list-item-element-image">
					<img src={image} alt="" onLoad={showImage} ref={imgEl} />
				</Column>
				<Column className="list-item-element-title">{title}</Column>
				<Column className="list-item-element-description">{description}</Column>
				<div className="list-item-element-price">$ {price}</div>
			</Row>
		</div>
	);
}

export default Item;