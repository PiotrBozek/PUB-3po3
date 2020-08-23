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
        wybor: ''
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
        // console.log(term);
        this.setState({
            wybor: term,
        })
        // console.log(this.state.wybor);
        const filterP = this.state.pizzas;
        const FilterPizza = filterP.filter(name => name.ingredient.includes(term.toLowerCase()));
       
        if (FilterPizza.length === 0 && choice === "pizza") {
            if (this.state.vegetarian === true) {this.setState({pizzas: FilterPizza})}
            else    this.setState({pizzas: API_DATA.Pizzas})
    } 
        else if (FilterPizza.length === 0 && choice === "salad") {
            this.setState({pizzas: FilterPizza})
    }
    else {
        this.setState({
            pizzas: FilterPizza
        })
    }
    // console.log(this.state.wybor);
}

    onTermButtonPizza = () => {
        // console.log(this.state.wybor);
        const filterP = this.state.FETCHED_DATA.Pizzas;
        const testuj =  !this.state.wybor ? filterP.filter(name => name) : filterP.filter(name => name.ingredient.includes(this.state.wybor.toLocaleLowerCase()));
        const FilterPizza = this.state.vegetarian ? filterP.filter(name => name.vege) : testuj;
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
    
//   this.state.vegetarian ? (this.state.choice === 'pizza'? console.log('vege pizza'): console.log('sałatka vege')) : (this.state.choice === 'pizza' ? console.log('pizza all'): console.log('sałatka all'));
              


            // console.log(this.state.choice);
            // console.log(this.state.vegetarian);

            const filterP = this.state.choice==="pizza" ? API_DATA.Pizzas : API_DATA.Salad;
            // console.log(filterP);
            const FilterPizza = filterP.filter(name => name.vege);
            
            console.log(FilterPizza);

            const FilterPPP = this.state.wybor ? 
                        API_DATA.Pizzas.filter(name => name.ingredient.includes(this.state.wybor.toLocaleLowerCase())) 
                        : API_DATA.Pizzas;

            const FilterSal = this.state.wybor ? 
                        API_DATA.Salad.filter(name => name.ingredient.includes(this.state.wybor.toLocaleLowerCase())) 
                        : API_DATA.Salad;
                        
            // console.log(FilterPPP);
            console.log(FilterSal);
            
            
            this.state.vegetarian ? 
                this.setState(this.state.choice === "pizza" ? {pizzas: FilterPPP} : {pizzas: FilterSal })
                :(this.setState(this.state.choice === "pizza" ? {pizzas: FilterPizza} : {pizzas: FilterPizza})); 
            
            
                
            // console.log(this.state.pizzas);
           
        }
    render () {  
        console.log(this.state.vegetarian);
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