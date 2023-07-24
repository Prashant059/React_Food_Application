import { useContext } from 'react';
import CartIcon from '../Cards/CartIcon';
import classes from './HeaderCardButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCardButton = (props) => {
  const cartCtx = useContext(CartContext);
  // console.log("from cart :", cartCtx);

  const { items } = cartCtx;

  const number0fCartItems = items.reduce((curNumber, item) => {
    
    return curNumber + item.amount;
  }, 0);
  

    return (
    <button className={classes.button} onClick={props.onClick}>

      <span className={classes.icon}> <CartIcon /> </span>
      <span>Your Card</span>
      <span className={classes.badge}>{number0fCartItems}</span>

    </button>
    );
};
export default HeaderCardButton;