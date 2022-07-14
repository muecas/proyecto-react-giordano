import { useRef } from 'react';
import { Row, Column } from '../../../Layout/Grid';

import './Item.scss';

/**
 * Item component
 * @param {String} title
 * @param {String} image
 * @param {String} description
 * @param stock
 * @return {JSX.Element}
 * @constructor
 */

function Item({ title, image, description, stock }) {
	const imgEl = useRef(null);
	function showImage() {
		imgEl.current.parentNode.classList.add('list-item-element-image--loaded');
	}
	return (
		<div className="list-item-element">
			<Row>
				<Column className="list-item-element-image">
					<img src={image} alt="" onLoad={showImage} ref={imgEl} />
				</Column>
				<Column className="list-item-element-title">{title}</Column>
				<Column className="list-item-element-description">{description}</Column>
			</Row>
		</div>
	);
}

export default Item;