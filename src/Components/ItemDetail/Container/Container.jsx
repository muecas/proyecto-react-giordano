import { useParams } from 'react-router-dom';
import { Row } from '../../../Layout/Grid';
import Detail from '../Detail/Detail';

import './Container.scss';

/**
 * Container component
 * @return {JSX.Element}
 * @constructor
 */

function Container() {
	const { slug } = useParams();
	return (
		<Row className="item-detail-container">
			<Detail slug={slug} />
		</Row>
	);
}

export default Container;