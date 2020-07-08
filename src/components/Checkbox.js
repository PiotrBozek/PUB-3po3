import './Checkbox.css';
import React from 'react';


export default (props) => {
    
        return (
            <div className="checkbox-div">
                <input 
                        type="checkbox" 
                        id="vegetaian" 
                        checked={props.vegebox}
                        onChange={props.change} 
                />
                <label htmlFor="vegetaian"> 
                        dla wegetarian 
                </label>
            </div>
        ) 
};

