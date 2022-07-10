import Nav from '../../Layout/Nav/Nav';
import { Menu, MenuItem } from '../Menu';
import { Container, Row, Column } from '../../Layout/Grid';
import ItemList from '../ItemList/ItemList';

import '../../Assets/Styles/common.scss';
import CartWidget from '../CartWidget/CartWidget';
import AddToCartWidget from '../AddToCartWidget/AddToCartWidget';

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
						<li><CartWidget href="#" /></li>
					</Menu>
				</Nav>
			</Row>
			<Row>
				<Column>
					<ItemList title="Welcome to the Shop">
						<AddToCartWidget onAdd={(amount) => console.log(amount)} />
					</ItemList>
				</Column>
			</Row>
		</Container>
	);
}

export default App;