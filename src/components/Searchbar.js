import React, { useState, useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonContext';

const Searchbar = () => {
    const [value, setValue] = useState('');
    const { getData } = useContext(PokemonContext);

    const handleChange = (e) => setValue(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        getData(value);
    };

    return (
        <form className="searchbar" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter a pokemon..." value={value} onChange={handleChange} />
        </form>
    );
};

export default Searchbar;
