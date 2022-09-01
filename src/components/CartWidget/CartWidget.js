import './CartWidget.style.css'
import cart from '../../assets/img/cart-image.png'

function CartWidget() {
    return (
        <img src={cart} className='cart-image' alt='cart-image' />
    )
}

export default CartWidget;