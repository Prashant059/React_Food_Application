import {useContext} from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';


const MealItem = (props) => {

   const cartCtx = useContext(CartContext);

   // const price = `$${props.price.toFixed()}`;
   
   const addItemToCartHandler = amount => {
      console.log(amount);
       cartCtx.additem({
         id: props.id,
         name: props.name,
         amount: amount,
         price: props.price
       });
       console.log("what in :",cartCtx.additem);
   };

   return (
    <li className={classes.meal}>
       <div>
        <h3>{props.name}</h3>
        <div><img src={props.image} alt="images"/></div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
       </div>
       <div>
          <MealItemForm id={props.id} onAddToCart={addItemToCartHandler}/>
       </div>
    </li>
   );
};

export default MealItem;