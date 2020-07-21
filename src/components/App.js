import React, { useContext } from 'react';
import Header from './Header';
import Searchbar from './Searchbar';
import PokemonCard from './PokemonCard';
import Loader from 'react-loader-spinner';
import { PokemonContext } from '../contexts/PokemonContext';

function App() {
    const { isLoading } = useContext(PokemonContext);

    return (
        <div className="app">
            <Header />
            <Searchbar />
            {isLoading ? <Loader className="loader" type="ThreeDots" color="#999" /> : <PokemonCard />}
        </div>
    );
}

export default App;
