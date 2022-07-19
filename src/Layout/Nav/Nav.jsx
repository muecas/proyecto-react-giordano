import Row from '../Grid/Row/Row'
import { Menu, MenuItem } from '../../Components/Menu';
import CartWidget from '../../Components/CartWidget/CartWidget';
import AppPaths from '../../Services/Utils/AppPaths';

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
						<MenuItem label="Inicio" to="/" />
						<MenuItem label="Productos" to={AppPaths.products()} />
						<MenuItem label="Empresa" to="/empresa" />
						<MenuItem label="Contacto" to="/contacto" />
						<li><CartWidget href="#" /></li>
					</Menu>
				</Row>
			</div>
		</Row>
	);
}

export default Nav;