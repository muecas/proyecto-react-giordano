import { Row, Column } from '../../../Layout/Grid';
import List from '../List/List';

import './Container.scss';

/**
 * Container component
 * @param {String}      title
 * @param {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */

function Container({ title, children } = { title : 'Bienvenidos' }) {
	return (
		<Row>
			<Column>
				<div className="item-list-container">
					<h2 className="item-list-container-title">{title}</h2>
					<List dataSrc="data/products.json" />
				</div>
			</Column>
		</Row>
	);
}

export default Container;