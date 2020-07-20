import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PokemonContext = createContext();

const PokemonContextProvider = ({ children }) => {
    const [pokemonApi, setPokemonApi] = useState('');
    const [pokemonData, setPokemonData] = useState({});
    const [hasData, setHasData] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonApi}`);
            setPokemonData(result.data);
            console.log('object');
        };

        fetchData();
    }, [pokemonApi]);

    const getData = (query) => {
        setPokemonApi(query);
        setHasData(true);
    };

    return <PokemonContext.Provider value={{ pokemonApi, pokemonData, getData, hasData }}>{children}</PokemonContext.Provider>;
};

export default PokemonContextProvider;
