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
				<Row className="item-list-container">
					<Column className="item-list-container-title">
						<h2>{title}</h2>
					</Column>
					<List dataSrc="data/products.json" />
				</Row>
			</Column>
		</Row>
	);
}

export default Container;