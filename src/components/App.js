import './App.css';
import API_DATA from '../mocks/API_DATA.json';
import React from 'react';
import ItemsList from './ItemsList';
import SearchBar from './SearchBar';
import Buttons from './Buttons';
import Checkbox from './Checkbox';
import Banner from './Banner';
import DivLeft from './DivLeft';
import DivRight from './DivRight';
class App extends React.Component {

    state = {
        FETCHED_DATA: {
            Pizzas: [],
            Ingredients: [],
            Salad: []
},
        pizzas:[],
        salad: [],
        ingredients: [],
        choice: "pizza",
        vegetarian: false,
    }

    componentDidMount(){
        this.setState({
            FETCHED_DATA: API_DATA,
            pizzas: API_DATA.Pizzas,
            salad: API_DATA.Salad,
            ingredients: API_DATA.Ingredients
        })    
    }

    onTermSubmit = (term, choise) => {
        const filterP = this.state.pizzas;
        const FilterPizza = filterP.filter(name => name.ingredient.includes(term.toLowerCase()));
        if (FilterPizza.length === 0) {
            if (this.state.vegetarian === true) {this.setState({pizzas: FilterPizza})}
            else    this.setState({pizzas: API_DATA.Pizzas})
    } 
        else {
            this.setState({pizzas: FilterPizza})
    }
}

    onTermButtonPizza = () => {
        const filterP = this.state.FETCHED_DATA.Pizzas;
        const FilterPizza = this.state.vegetarian ? filterP.filter(name => name.vege) : filterP.filter(name => name)
        this.setState({
            pizzas: FilterPizza,
            choice: "pizza"
        })  
}

    onTermButtonSalad = () => {
        const filterP = this.state.salad;
        const FilterPizza = this.state.vegetarian ? filterP.filter(name => name.vege) : filterP.filter(name => name);
           this.setState({
               pizzas: FilterPizza,
               choice: "salad"
           })   
}

    handleClickCheckbox = () => {
       this.setState({
        vegetarian: !this.state.vegetarian
    })
            const filterP = this.state.choice==="pizza" ? this.state.pizzas : this.state.salad ;
            const FilterPizza = filterP.filter(name => name.vege);
        this.state.vegetarian !== true ? this.setState({pizzas: FilterPizza}) : this.setState(this.state.choice === "pizza" ? {pizzas: API_DATA.Pizzas}: {pizzas: API_DATA.Salad});  
}
    render () {  
           return (
        <div 
            className="ui container">
            <Banner className="headers" />
            <DivLeft className="navi" />
            <div className= 'section'>                           
                <div className="search">
                        <Buttons 
                            className="search1"
                            onFormSubmitPizza = {this.onTermButtonPizza} 
                            onFormSubmitSalad = {this.onTermButtonSalad}
                            choice = {this.state.choice}/>
                        <SearchBar 
                            onFormSubmit = {this.onTermSubmit} />
                        <Checkbox 
                            vegebox={this.state.vegetarian} 
                            change={this.handleClickCheckbox}
                            checked={this.state.vegetarian} />
                </div>
                <DivRight className="navi" />
            </div>
            <ItemsList pizzas={this.state.pizzas} />  
            <footer>Prawa autorskie Bozik 2020</footer>
        </div>
        )
    }
}
export default App;