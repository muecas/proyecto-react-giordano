import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Nav from '../../Layout/Nav/Nav';
import { Container as GridContainer } from '../../Layout/Grid';

import '../../Assets/Styles/common.scss';
import AppPaths from '../../Services/Utils/AppPaths';

/**
 * App component
 * @return {JSX.Element}
 * @constructor
 */

const ItemListContainer = lazy(() => import('../ItemList/Container/Container'));
const ItemDetailContainer = lazy(() => import('../ItemDetail/Container/Container'));

function App() {
	return (
		<BrowserRouter>
			<GridContainer>
				<Nav />
				<Routes>
					<Route index path="/" element={
						<Suspense fallback={<div>Cargando...</div>}>
							<ItemListContainer title="Welcome to the Shop" />
						</Suspense>
					} />
					<Route index path={AppPaths.categories(':slug')}  element={
						<Suspense fallback={<div>Cargando...</div>}>
							<ItemListContainer />
						</Suspense>
					} />
					<Route index path={AppPaths.products(':slug')} element={
						<Suspense fallback={<div>Cargando...</div>}>
							<ItemDetailContainer />
						</Suspense>
					} />
					<Route index path="*" element={<Navigate to="/" />} />
				</Routes>
			</GridContainer>
		</BrowserRouter>
	);
}

export default App;