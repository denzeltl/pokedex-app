import React, { useState, useContext, useEffect } from 'react';
import { PokemonContext } from '../contexts/PokemonContext';

const Searchbar = () => {
    const [value, setValue] = useState('');
    const { getData, pokemonList } = useContext(PokemonContext);

    useEffect(() => {
        console.log(value.length);
        if (value.length <= 2) {
            return;
        } else {
            const queryList = pokemonList.filter((pokemon) => pokemon.name.includes(value));
            console.log(queryList);
        }
    }, [value]);

    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.length >= 3) {
            getData(value);
        }
    };

    return (
        <form className="searchbar" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter a pokemon..." value={value} onChange={handleChange} />
        </form>
    );
};

export default Searchbar;
