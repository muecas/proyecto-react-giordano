import { useEffect, useState } from 'react';
import { Row, Column } from '../../../Layout/Grid';
import Item from '../Item/Item';

import './List.scss';

/**
 * List component
 * @param {String} dataSrc
 * @return {JSX.Element}
 * @constructor
 */

function List({ dataSrc }) {
	const [ data, setProduts ] = useState({ products : [] });
	useEffect(() => {
		async function fetchData() {
			return await fetch(dataSrc);
		}
		setTimeout(() => {
			fetchData()
				.then(response => response.json())
				.then(response => setProduts(response))
				.catch(err => console.log(err));
		}, 2000);
	}, [dataSrc]);
	return (
		<Column className="item-list">
			<Row>
				{data.products.length ? data.products.map((product, index) => <Item key={index} {...product}></Item>) : <Column className="item-list-loading">Cargando productos...</Column>}
			</Row>
		</Column>
	);
}

export default List;