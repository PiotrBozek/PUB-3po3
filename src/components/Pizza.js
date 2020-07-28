import "./Pizza.css";
import React from 'react';

export default (key) => {

    const skladniki = key.ingredient.toString().replace(/,/g, ", ");
    const picture = `../pics/pizzas/${key.name}.jpg`;
    const alt = `pizza ${key.name}`;
    const price = key.price.join(", ");
    // const test = key.price.map(() => <p>{key.price} zł</p>)
return (
    
<div className="cards">
    <div className="card">
        <div>
            <img className="image" src={picture} alt= {alt} />
        </div>
        <div className="ui content data">
            <div className="name">
                    <div className="name-pizza">
                        {key.name.toUpperCase()}
                    </div>
                    <div className="ingredient">
                        <p>{skladniki}</p>
                    </div>
            </div>
            <div className="price">
                <p>cena</p>
                {/* {test} */}
                    {price}
            </div>
        </div>
    </div>
</div>
)
}

