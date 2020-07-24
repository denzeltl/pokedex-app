import React, { useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonContext';

const SearchList = ({ setValue }) => {
    const { searchList, showSearchList, getData } = useContext(PokemonContext);

    const handleClick = (e) => {
        getData(
            e.target.textContent
                .split(' ')
                .map((word) => word.toLowerCase())
                .join('-')
        );
        setValue('');
    };

    return (
        <>
            {showSearchList && (
                <ul className="search-list">
                    {searchList.map((pokemon) => (
                        <li onClick={handleClick} key={pokemon.name}>
                            {pokemon.name
                                .split('-')
                                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                .join(' ')}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default SearchList;
