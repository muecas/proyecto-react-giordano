import { Row } from '../../../Layout/Grid';
import Detail from '../Detail/Detail';

import './Container.scss';

/**
 * Container component
 * @return {JSX.Element}
 * @constructor
 */

function Container() {
	return (
		<Row className="item-detail-container">
			<Detail slug="praesent-sit-amet" />
		</Row>
	);
}

export default Container;