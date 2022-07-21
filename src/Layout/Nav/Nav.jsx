import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Row from '../Grid/Row/Row'
import { Menu, MenuItem } from '../../Components/Menu';
import CartWidget from '../../Components/CartWidget/CartWidget';
import AppPaths from '../../Services/Utils/AppPaths';

import './Nav.scss';

/**
 * Nav component
 * @return {JSX.Element}
 * @constructor
 */

function Nav() {
	const [ categories, setCategories ] = useState([]);
	useEffect(() => {
		async function fetchData() {
			return await fetch('/data/products.json');
		}
		fetchData()
			.then(response => response.json())
			.then(response => {
				let ids        = [],
					categories = response.products
						.map(({ category }) => category)
						.filter(category => {
							if(ids.includes(category.id) === true) return false;
							ids.push(category.id);
							return true;
						});
				setCategories(categories);
			})
			.catch(err => console.log(err));
	}, []);
	return (
		<Row>
			<div className="nav">
				<Row alignItems="center">
					<div className="nav-branding"><Link to="/">Shop branding</Link></div>
					<Menu>
						<MenuItem label="Inicio" to="/" />
						{categories.map((category, index) => <MenuItem key={index} label={category.label} to={AppPaths.categories(category.slug)} />)}
						<li><CartWidget href="#" /></li>
					</Menu>
				</Row>
			</div>
		</Row>
	);
}

export default Nav;