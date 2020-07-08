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

    onClickX = () => {
        this.setState({
            term: ''
    })
       
}
    render() {
        return (
        <div className="search-bar">
            <form onSubmit={this.onFormSubmit} className="ui form box-search">
                <div className="field">
                    <label className="label-name">co lubisz?</label>
                    <input 
                        type="text" 
                        value={this.state.term}
                        onChange={this.onInputChange}
                    />
                </div>
            </form>
            <div className="resetX" onClick={this.onClickX}>kasuj</div>
        </div>
            )
    }
}

export default SearchBar;