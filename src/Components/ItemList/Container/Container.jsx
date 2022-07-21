import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Column } from '../../../Layout/Grid';
import List from '../List/List';

/**
 * Container component
 * @param {String} title
 * @return {JSX.Element}
 * @constructor
 */

function Container({ title }) {
	return (
		<Row>
			<Column>
				<List dataSrc="/data/products.json" title={title} />
			</Column>
		</Row>
	);
}

export default Container;