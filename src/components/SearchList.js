import React, { useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonContext';

const SearchList = () => {
    const { searchList, showSearchList } = useContext(PokemonContext);
    return (
        <>
            {showSearchList && (
                <ul className="search-list">
                    {searchList.map((pokemon) => (
                        <li key={pokemon.name}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default SearchList;
