import React, { useContext } from 'react';
import Header from './Header';
import Searchbar from './Searchbar';
import PokemonCard from './PokemonCard';
import Loader from 'react-loader-spinner';
import { PokemonContext } from '../contexts/PokemonContext';

function App() {
    const { isLoading, noPokemon } = useContext(PokemonContext);

    return (
        <div className="app">
            <Header />
            <Searchbar />
            {isLoading ? <Loader className="loader" type="ThreeDots" color="#999" /> : <PokemonCard />}
            {noPokemon && <h2 className="no-pokemon">Sorry, no pokemon found.</h2>}
        </div>
    );
}

export default App;
