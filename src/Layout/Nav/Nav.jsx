import Row from '../Grid/Row/Row'
import { Menu, MenuItem } from '../../Components/Menu';
import CartWidget from '../../Components/CartWidget/CartWidget';

import './Nav.scss';

/**
 * Nav component
 * @param {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */

function Nav({ children }) {
	return (
		<Row>
			<div className="nav">
				<Row alignItems="center">
					<div className="nav-branding">Shop branding</div>
					<Menu>
						<MenuItem label="Productos" href="#" />
						<MenuItem label="Empresa" href="#" />
						<MenuItem label="Contacto" href="#" />
						<li><CartWidget href="#" /></li>
					</Menu>
				</Row>
			</div>
		</Row>
	);
}

export default Nav;