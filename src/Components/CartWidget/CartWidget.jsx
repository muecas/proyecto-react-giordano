import './CartWidget.scss';
import cartIcon from '../../Assets/Images/shopping-cart.svg';

/**
 * CartWidget component
 * @param {String}           href
 * @param {CallableFunction} callback
 * @param {Number}           amount
 * @return {JSX.Element}
 * @constructor
 */

function CartWidget({ href, callback, amount = 0 }) {
	const attributes = {};
	typeof href !== 'undefined' && (attributes.href = href);
	typeof callback !== 'undefined' && (attributes.onClick = callback);
	return (
		<a className="cart-widget" {...attributes}><img src={cartIcon} alt="" /><span>{amount}</span></a>
	);
}

export default CartWidget;