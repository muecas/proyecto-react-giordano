import Nav from '../../Layout/Nav/Nav';
import { Container as GridContainer } from '../../Layout/Grid';
import { Container as ItemListContainer } from '../ItemList';

import '../../Assets/Styles/common.scss';

/**
 * App component
 * @return {JSX.Element}
 * @constructor
 */

function App() {
	return (
		<GridContainer>
			<Nav />
			<ItemListContainer title="Welcome to the Shop" />
		</GridContainer>
	);
}

export default App;