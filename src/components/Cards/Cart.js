import React, { useContext } from 'react';
import classes from  './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = props => {
   const cartCtx = useContext(CartContext);

   // const totalAmount = `$${cartCtx.totalAmount.toFixed(0)}`;

   const totalAmount = cartCtx.totalAmount;

   const hasItems = cartCtx.items.length > 0;

   const cartItemRemoveHandler = (id) => {
      cartCtx.removeitem(id);
   };

   const cartItemAddHandler = (item) => {
      cartCtx.additem({...item, amount: 1});
   };

     const cartItem = (
     <ul className={classes['cart-items']}>
        {cartCtx.items.map((item) => (
         <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)}/>
        ))}
     </ul>
      );

     return (
     <Modal onClose={props.onClose}>
              {cartItem}
                 <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                 </div>
                 <div className={classes.actions}>
                    <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                    {hasItems && <button className={classes.button}>Order</button>}
                 </div>
            </Modal>
     );
     
};

export default Cart;