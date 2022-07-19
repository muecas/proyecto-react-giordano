import { useEffect, useState, useRef } from 'react';
import { Row, Column } from '../../../Layout/Grid';
import { Link } from 'react-router-dom';
import AppPaths from '../../../Services/Utils/AppPaths';

import './Detail.scss';
import AddToCartWidget from '../../AddToCartWidget/AddToCartWidget';

/**
 * Detail component
 * @param {String} slug
 * @return {JSX.Element}
 * @constructor
 */

function Detail({ slug }) {
	const [ data, setProdut ] = useState({});
	const imgEl = useRef(null);
	useEffect(() => {
		async function fetchData() {
			return await fetch('/data/products.json');
		}
		setTimeout(() => {
			fetchData()
				.then(response => response.json())
				.then(response => setProdut(response.products.find(product => product.slug === slug)))
				.catch(err => console.log(err));
		}, 2000);
	}, [slug]);
	function showImage() {
		imgEl.current.parentNode.classList.add('item-detail-image--loaded');
	}
	return (
		Object.keys(data).length > 0 ?
			<Column className="item-detail">
				<Row>
					<Column className="item-detail-images">
						<div className="item-detail-image">
							<img src={data.image} alt="" onLoad={showImage} ref={imgEl} />
						</div>
					</Column>
					<Column className="item-detail-information">
						<Row>
							<Column>
								<Row>
									<Column className="item-detail-information-main">
										<Row>
											<Column className="item-detail-information-title">
												<h6><Link to={AppPaths.categories(data.category.slug)}>{data.category.label}</Link> | SKU {data.sku} {data.stock > 0 ? <> | <strong>Stock disponible</strong></> : ''}</h6>
												<h2>{data.title}</h2>
											</Column>
											<Column className="item-detail-information-desciption">
												<p>{data.description}</p>
											</Column>
										</Row>
									</Column>
									<Column className="item-detail-information-sidebar">
										<div className="item-detail-information-price-tag">$ {data.price}</div>
										<AddToCartWidget initial="1" max={data.stock} onAdd={amount => console.log(`Agregando al carro ${amount} unidad(es) de SKU ${data.sku}`)} />
									</Column>
								</Row>
							</Column>
						</Row>
					</Column>
				</Row>
			</Column> :
			<Column className="item-detail-loading">Cargando producto...</Column>
	);
}

export default Detail;