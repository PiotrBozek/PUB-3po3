import './Button.css';
import React from 'react';


   export default (choice) =>{
         
    return (
        <div className="test">
            <button onClick={choice.onFormSubmitPizza} className="ui primary basic button buttonHover">
                Pizza
            </button>
            <button onClick={choice.onFormSubmitSalad} className="ui primary basic button buttonHover">
                Sałatka
            </button>
            
            
        </div>
        )
        
}
