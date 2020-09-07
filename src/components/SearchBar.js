import './SearchBar.css';
import React from 'react';

class SearchBar extends React.Component {
    state = {
        value: ''
    };
    onInputChange = event => {
        this.setState({
            value: event.target.value
})
    }
    onFormSubmit = event => {
        event.preventDefault(); 
        this.props.onFormSubmit(this.state.value); 
  }
  onResetClick = event => {
    this.setState({
        value: ''
    }) 
    this.props.onResetClick(this.state.value); 
  }
    render(){
        return (
        <div className="search-bar">
            <form onSubmit={this.onFormSubmit} className="ui form box-search">
                <div className="field">
                    <label className="label-name"><p>co lubisz?</p></label>
                    <input className="input-search"
                        type="text" 
                        value={this.state.value}
                        onChange={this.onInputChange}
                        placeholder="pieczarki, szynka itp."
                    />
                </div>
            </form>
            <button onClick={this.onResetClick}>kasuj</button>
        </div>
            )
    }
}
export default SearchBar;