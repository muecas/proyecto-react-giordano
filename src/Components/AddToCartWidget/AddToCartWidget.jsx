import { useState, useEffect } from 'react';

import './AddToCartWidget.scss';

/**
 * AddToCartWidget component
 * @param {String}           label
 * @param {Number}           initial
 * @param {Number}           max
 * @param {CallableFunction} onAdd
 * return {JSX.Element}
 * @constructor
 */

function AddToCartWidget({ label = 'Producto', initial = 1, max = 10, onAdd = (amount) => {} }) {
	const [ amount, setAmount ] = useState(initial);
	const decrease = () => {
		if(amount - 1 > 0) {
			setAmount(amount - 1);
		}
	};
	const increase = () => {
		if(amount + 1 <= max) {
			setAmount(amount + 1);
		}
	};
	let increaseButton, decreaseButton;
	useEffect(() => {
		decreaseButton[amount > 1 ? 'removeAttribute' : 'setAttribute']('disabled', '');
		increaseButton[amount < max ? 'removeAttribute' : 'setAttribute']('disabled', '');
	});
	return (
		<div className="add-to-cart-widget">
			<div className="add-to-cart-widget-label">{label}</div>
			<div className="add-to-cart-widget-amount">
				<button onClick={decrease} ref={element => decreaseButton = element}>-</button>
				<div>{amount}</div>
				<button onClick={increase} ref={element => increaseButton = element}>+</button>
			</div>
			<button className="add-to-cart-widget-button" onClick={() => onAdd(amount)}>Agregar al carro</button>
		</div>
	)
}

export default AddToCartWidget;