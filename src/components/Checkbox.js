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
                <label className="vegetarian"> 
                        dla wegetarian 
                </label>
            </div>
        ) 
};

