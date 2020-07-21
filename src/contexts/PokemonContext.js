import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PokemonContext = createContext();

const PokemonContextProvider = ({ children }) => {
    const [pokemonApi, setPokemonApi] = useState('');
    const [pokemonData, setPokemonData] = useState({});
    const [hasData, setHasData] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonApi}`);
            setPokemonData(result.data);
            setIsLoading(false);
        };

        fetchData();
    }, [pokemonApi]);

    const getData = (query) => {
        setPokemonApi(query);
        setHasData(true);
        setIsLoading(true);
    };

    return <PokemonContext.Provider value={{ pokemonApi, pokemonData, getData, hasData, isLoading }}>{children}</PokemonContext.Provider>;
};

export default PokemonContextProvider;
