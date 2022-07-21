import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Column } from '../../../Layout/Grid';
import Item from '../Item/Item';

import './List.scss';

/**
 * List component
 * @param {String} title
 * @param {String} dataSrc
 * @return {JSX.Element}
 * @constructor
 */

function List({ title, dataSrc }) {
	const [ data, setProduts ] = useState({ products : [] });
	const [ listTitle, setTitle ] = useState('');
	const { slug } = useParams();
	useEffect(() => {
		setProduts({ products : [] });
		setTitle('');
		async function fetchData() {
			return await fetch(dataSrc);
		}
		setTimeout(() => {
			fetchData()
				.then(response => response.json())
				.then(response => {
					if(typeof slug === 'undefined') return response;
					let title,
						products = {
							products : response.products.filter(product => {
								if(product.category.slug === slug) {
									if(typeof title === 'undefined') title = product.category.label;
									return true;
								}
								return false;
							})
						};
					setTitle(`Category: ${title}`);
					return products;
				})
				.then(response => setProduts(response))
				.catch(err => console.log(err));
		}, 2000);
	}, [dataSrc, slug]);
	return (
		<Row className="item-list">
			<Column className="item-list-title">
				<h2>{title || listTitle}</h2>
			</Column>
			<Column className="item-list-container">
				<Row>
					{data.products.length ? data.products.map((product, index) => <Item key={index} {...product}></Item>) : <Column className="item-list-loading">Cargando productos...</Column>}
				</Row>
			</Column>
		</Row>
	);
}

export default List;