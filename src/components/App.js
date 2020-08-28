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
        addSelection: ''
    }

    componentDidMount(){
        this.setState({
            FETCHED_DATA: API_DATA,
            pizzas: API_DATA.Pizzas,
            salad: API_DATA.Salad,
            ingredients: API_DATA.Ingredients
        })    
    }

    onTermSubmit = (term, choice) => {
        this.setState({
            addSelection: term,
        })
        const filterFirst = this.state.choice==="pizza" ? API_DATA.Pizzas : API_DATA.Salad; 
        const FilterMenu = filterFirst.filter(name => name.ingredient.includes(term.toLowerCase()));
       
        if (FilterMenu.length === 0 && choice === "pizza") {
            if (this.state.vegetarian === true) {this.setState({pizzas: FilterMenu})}
            else    this.setState({pizzas: API_DATA.Pizzas})
    } 
        else if (FilterMenu.length === 0 && choice === "salad") {
            this.setState({pizzas: FilterMenu})
    }
    else {
        this.setState({
            pizzas: FilterMenu
        })
    }
}

    onTermButtonPizza = () => {
        const filterFirst = API_DATA.Pizzas;
        const testuj =  this.state.addSelection ? filterFirst.filter(name => name.ingredient.includes(this.state.addSelection.toLocaleLowerCase())) : filterFirst.filter(name => name);
        const FilterMenu = this.state.vegetarian ? testuj.filter(name => name.vege) : testuj;
        this.setState({
            pizzas: FilterMenu,
            choice: "pizza"
        })  
}

    onTermButtonSalad = () => {
        const filterFirst = API_DATA.Salad;
        const testuj =  this.state.addSelection ? filterFirst.filter(name => name.ingredient.includes(this.state.addSelection.toLocaleLowerCase())) : filterFirst.filter(name => name);
        const FilterMenu = this.state.vegetarian ? testuj.filter(name => name.vege) : testuj;
        this.setState({
               pizzas: FilterMenu,
               choice: "salad"
           })   
}

    handleClickReset = (e) => {
        e.preventDefault();
        this.setState({
                addSelection: '',
                pizzas: this.state.choice==="pizza" ? API_DATA.Pizzas : API_DATA.Salad
            })
            }

    handleClickCheckbox = () => {
       this.setState({
        vegetarian: !this.state.vegetarian
    })    
            const FilterPizza = this.state.addSelection ? 
                        API_DATA.Pizzas.filter(name => name.ingredient.includes(this.state.addSelection.toLocaleLowerCase())) 
                        : API_DATA.Pizzas;

            const FilterSalad = this.state.addSelection ? 
                        API_DATA.Salad.filter(name => name.ingredient.includes(this.state.addSelection.toLocaleLowerCase())) 
                        : API_DATA.Salad;

            const filterFirst = this.state.choice==="pizza" ? API_DATA.Pizzas : API_DATA.Salad;
            const filterSecond = this.state.choice === "pizza" ? FilterPizza : FilterSalad;
            const FilterMenu = this.state.addSelection ? filterSecond.filter(name => name.vege) : filterFirst.filter(name => name.vege);
            this.state.vegetarian ? 
                this.setState(this.state.choice === "pizza" ? {pizzas: FilterPizza} : {pizzas: FilterSalad}) : this.setState({pizzas: FilterMenu}); 
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