import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PokemonContext = createContext();

const PokemonContextProvider = ({ children }) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [pokemonApi, setPokemonApi] = useState('');
    const [pokemonData, setPokemonData] = useState({});
    const [hasData, setHasData] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [noPokemon, setNoPokemon] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=964');
            setPokemonList(result.data.results);
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            await axios
                .get(`https://pokeapi.co/api/v2/pokemon/${pokemonApi}`)
                .then((result) => {
                    setPokemonData(result.data);
                    setIsLoading(false);
                })
                .catch((error) => {
                    setHasData(false);
                    setNoPokemon(true);
                    setIsLoading(false);
                });
        };

        fetchData();
    }, [pokemonApi]);

    const getData = (query) => {
        setPokemonApi(query);
        setNoPokemon(false);
        setHasData(true);
        setIsLoading(true);
    };

    return <PokemonContext.Provider value={{ pokemonApi, pokemonData, getData, hasData, isLoading, pokemonList, noPokemon }}>{children}</PokemonContext.Provider>;
};

export default PokemonContextProvider;
