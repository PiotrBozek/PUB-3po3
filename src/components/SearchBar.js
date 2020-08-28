import './SearchBar.css';
import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: ''
    };

    onInputChange = event => {
        this.setState({
            term: event.target.value
})
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term); 
  }

    render() {
        return (
        <div className="search-bar">
            <form onSubmit={this.onFormSubmit} className="ui form box-search">
                <div className="field">
                    <label className="label-name"><p>co lubisz?</p></label>
                    <input className="input-search"
                        type="text" 
                        value={this.state.term}
                        onChange={this.onInputChange}
                        placeholder="pieczarki, szynka itp."
                    />
                </div>
            </form>
        </div>
            )
    }
}

export default SearchBar;