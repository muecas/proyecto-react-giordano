import Nav from '../../Layout/Nav/Nav';
import { Menu, MenuItem } from '../Menu';
import { Container, Row } from '../../Layout/Grid';

import '../../Assets/Styles/common.scss';
import cartIcon from '../../Assets/Images/shopping-cart.svg';

/**
 * App component
 * @return {JSX.Element}
 * @constructor
 */

function App() {
	return (
		<Container>
			<Row>
				<Nav>
					<Menu>
						<MenuItem label="Productos" href="#" />
						<MenuItem label="Empresa" href="#" />
						<MenuItem label="Contacto" href="#" />
						<MenuItem href="#" icon={cartIcon}></MenuItem>
					</Menu>
				</Nav>
			</Row>
		</Container>
	);
}

export default App;