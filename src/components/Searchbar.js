import React, { useState, useContext, useEffect } from 'react';
import { PokemonContext } from '../contexts/PokemonContext';
import SearchList from './SearchList';

const Searchbar = () => {
    const [value, setValue] = useState('');
    const { getData, pokemonList, setShowSearchList, setSearchList } = useContext(PokemonContext);

    useEffect(() => {
        if (value.length <= 2) {
            setShowSearchList(false);
            return;
        } else {
            const queryList = pokemonList.filter((pokemon) => pokemon.name.includes(value));
            setSearchList(queryList);
            if (queryList.length) {
                setShowSearchList(true);
            }
        }
    }, [value]);

    const handleChange = (e) => {
        setValue(
            e.target.value
                .split(' ')
                .map((word) => word.toLowerCase())
                .join('-')
        );
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.length >= 3) {
            getData(value);
            setValue('');
        }
    };

    return (
        <form className="searchbar" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter a pokemon..." value={value} onChange={handleChange} />
            <SearchList setValue={setValue} />
        </form>
    );
};

export default Searchbar;
