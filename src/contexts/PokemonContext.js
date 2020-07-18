import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PokemonContext = createContext();

const PokemonContextProvider = ({ children }) => {
    const [pokemonApi, setPokemonApi] = useState('pikachu');
    const [pokemonData, setPokemonData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonApi}`);
            setPokemonData(result.data);
        };

        fetchData();
        console.log(pokemonData);
    }, []);

    return <PokemonContext.Provider value={{ pokemonApi, pokemonData }}>{children}</PokemonContext.Provider>;
};

export default PokemonContextProvider;
