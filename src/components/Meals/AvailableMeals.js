import React from 'react';
import classes from './AvailableMeals.module.css';
import MealItem from '../Meals/MealItem/MealItem';
import Card from '../UI/Card';

const DUMMY_MEALS = [
    {
        id:'m1',
        name:'Chapati',
        image:'https://images.pexels.com/photos/9797029/pexels-photo-9797029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description:'Chapatis are made of whole-wheat flour known as atta.' ,
        price: 15 ,
    },
    {
        id:'m2',
        name:'Pickle',
        image:'https://images.pexels.com/photos/7812134/pexels-photo-7812134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description:'Mixed pickles are pickles made from a variety of vegetables mixed in the same pickling process.',
        price: 50 ,
    },
    {
        id:'m3',
        name:'Curd',
        image:'https://qph.fs.quoracdn.net/main-qimg-fc114ef1880be5c9b0367461a48f8797-c',
        description:' a traditional yogurt or fermented milk product',
        price: 45,
    },
    {
        id:'m4',
        name:'Sweet',
        image:'https://th.bing.com/th/id/OIP.WQwr2zcLyqZrMIrqGP4iZAHaF9?pid=ImgDet&rs=1',
        description:'Ras malai, originally known as rosomalai, or roshmalai, is a dessert from the Indian subcontinent.',
        price: 80,
    },
    {
        id:'m5',
        name:'Daal',
        image:'https://www.whiskaffair.com/wp-content/uploads/2019/04/Dal-Tadka-2-3.jpg',
        description:'A dal is a split grain used in Indian',
        price: 120,
    },
    {
        id:'m6',
        name:'Paneer',
        image:'https://th.bing.com/th/id/OIP.K6_nKzXzZV83ODIuzt2wEQHaE8?pid=ImgDet&rs=1',
        description:' an Indian cheese that made from curdled milk and some sort of fruit or vegetable acid like lemon juice',
        price: 150,
    }
   ];

const AvailableMeals = () => {
   const mealLists  = DUMMY_MEALS.map((dish) => (
    <MealItem key={dish.id} id={dish.id} name={dish.name} image={dish.image} description={dish.description} price={dish.price}/>
   ));

   return (
    <section className={classes.meals}>
        <Card>
        <ul>{mealLists}</ul>
        </Card>
    </section>
   )};
   

export  default AvailableMeals;