import React from "react";


const FilterTodo = ({value, onChange}) => {
    return (
        <label>
            filter by name
            <input 
            type="text"
            value={value}
            onChange={onChange}
            />
        </label>
    )
}

export default FilterTodo;