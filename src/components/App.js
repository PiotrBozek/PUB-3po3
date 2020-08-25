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
        const filterP = this.state.choice==="pizza" ? API_DATA.Pizzas : API_DATA.Salad; 
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
        
        const filterP = API_DATA.Pizzas;
        
        const testuj =  this.state.wybor ? filterP.filter(name => name.ingredient.includes(this.state.wybor.toLocaleLowerCase())) : filterP.filter(name => name);
        const FilterPizza = this.state.vegetarian ? filterP.filter(name => name.vege) : testuj;
        this.setState({
            pizzas: FilterPizza,
            choice: "pizza"
        })  
}

    onTermButtonSalad = () => {
       const filterP = API_DATA.Salad;
         // console.log(this.state.wybor);

const testuj =  this.state.wybor ? filterP.filter(name => name.ingredient.includes(this.state.wybor.toLocaleLowerCase())) : filterP.filter(name => name);
        


        const FilterPizza = this.state.vegetarian ? filterP.filter(name => name.vege) : testuj;
           this.setState({
               pizzas: FilterPizza,
               choice: "salad"
           })   
}

    handleClickCheckbox = () => {
 
       this.setState({
        vegetarian: !this.state.vegetarian
    })
    console.log(this.state.wybor);
            
            const FilterPPP = this.state.wybor ? 
                        API_DATA.Pizzas.filter(name => name.ingredient.includes(this.state.wybor.toLocaleLowerCase())) 
                        : API_DATA.Pizzas;

            const FilterSal = this.state.wybor ? 
                        API_DATA.Salad.filter(name => name.ingredient.includes(this.state.wybor.toLocaleLowerCase())) 
                        : API_DATA.Salad;
            
            // console.log(FilterPPP);
            // console.log(FilterSal);

            const jeszczeJedna = this.state.choice === "pizza" ? FilterPPP : FilterSal;
            
            console.log(this.state.choice);
            console.log(jeszczeJedna);

            const filterP = this.state.choice==="pizza" ? API_DATA.Pizzas : API_DATA.Salad;
            const FilterPizza = this.state.wybor ? jeszczeJedna.filter(name => name.vege) : filterP.filter(name => name.vege);
            

                        console.log(FilterPPP); // wybiera z oliwkami

                        console.log(filterP); // wszystkie pizze

                        console.log(FilterSal); // sałatki z oliwkami

                        console.log(FilterPizza); // pizza vege z oliwkami

                         

            this.state.vegetarian ? 
                this.setState(this.state.choice === "pizza" ? {pizzas: FilterPPP} : {pizzas: FilterSal}) : this.setState({pizzas: FilterPizza}); 
            
            
                // console.log(FilterSal);

        }
    render () {  
        // console.log(this.state.vegetarian);
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