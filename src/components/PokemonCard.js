import React, { useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonContext';

const PokemonCard = () => {
    const { pokemonData, pokemonApi } = useContext(PokemonContext);
    console.log(pokemonApi);
    console.log(pokemonData);
    return <div className="pokemon-card">{pokemonData ? <h2>{pokemonData.name}</h2> : <h2>{pokemonData}</h2>}</div>;
};

export default PokemonCard;
