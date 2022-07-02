import Row from '../Grid/Row/Row'

import './Nav.scss';

/**
 * Nav component
 * @param {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */

function Nav({ children }) {
	return (
		<div className="nav">
			<Row alignItems="center">
				<div className="nav-branding">Shop branding</div>
				{children}
			</Row>
		</div>
	);
}

export default Nav;