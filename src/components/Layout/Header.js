import React, { Fragment} from 'react';
import mealsImage from '../../assets/Meals1..jpg';
import HeaderCardButton from './HeaderCardButton';
import classes from './Header.module.css';


const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Thali React App</h1>
                <HeaderCardButton onClick={props.onShowCart}/>
            </header>

            <div className={classes['main-image']}>
                <img src={mealsImage} alt='A table full of Indian delicios food! '/>
            </div>
        </Fragment>
    )
}
export default Header;