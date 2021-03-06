import "./Pizza.css";
import React from 'react';

export default (key) => {
    const items = key.ingredient.toString().replace(/,/g, ", ");
    const picture = `../pics/pizzas/${key.name}.jpg`;
    const alt = `pizza ${key.name}`;
    const price = key.price.map((one) => <p key={one}>{one}<span>zł</span></p>);
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
                        <p>{items}</p>
                    </div>
            </div>
            <div className="price">
                    {price}
            </div>
        </div>
    </div>
</div>
)
}

