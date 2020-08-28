import './Button.css';
import React from 'react';

   export default (choice) =>{
    return (
        <div className="buttons2">
            <button onClick={choice.onFormSubmitPizza} className= {choice.choice==="pizza"?"active":"buttonHover"}>
                PIZZA
            </button>
            <button onClick={choice.onFormSubmitSalad} className= {choice.choice==="salad"?"active":"buttonHover"}>
                SAŁATKA
            </button>
        </div>
        )
}
