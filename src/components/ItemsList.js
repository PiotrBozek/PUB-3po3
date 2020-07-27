import "./ItemList.css";
import React from 'react';
import Pizza from './Pizza';

export default ({pizzas}) => {
    const pizzaOne =   pizzas.map(pizza => (
        <Pizza 
                key = {pizza.key}
                name = {pizza.name}
                ingredient = {pizza.ingredient}
                price = {pizza.price}
        />    
            ))
return (

 <div className ="items-list">
     {pizzaOne}
 </div>

)
}

