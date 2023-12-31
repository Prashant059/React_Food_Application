import { useRef, useState } from 'react'
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = (props) => {
  const[amountIsValid, setAmountValid] = useState(true);
  const amountInputRef = useRef();  

  const submitHandler = (event) => {
        event.preventDefault()

  const enteredAmount = amountInputRef.current.value;
  const enteredAmountNumber = +enteredAmount;
  
  
  if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
    setAmountValid(false)
     return;
  }

  props.onAddToCart(enteredAmountNumber);
  };  

    return ( 
     <form className={classes.form} onSubmit={submitHandler}>
            <Input label='Amount' 
               ref={amountInputRef}
               input={{
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '0'
               }} 
            />
               <button>+ ADD</button>
               {!amountIsValid && <p>Entered a Valid Amount (1 - 5).</p>}
      </form> 
    );
};

export default MealItemForm;