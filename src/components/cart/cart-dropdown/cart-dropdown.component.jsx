import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../button/button.component_old';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../../store/cart/cart.selector'

import { CartDropDownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles';

const CartDropdown = () => {
  const cartItems  = useSelector(selectCartItems);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;