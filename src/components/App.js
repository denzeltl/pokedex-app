import React from 'react';
import Header from './Header';
import Searchbar from './Searchbar';
import PokemonCard from './PokemonCard';
import PokemonContextProvider from '../contexts/PokemonContext';

function App() {
    return (
        <div className="app">
            <PokemonContextProvider>
                <Header />
                <Searchbar />
                <PokemonCard />
            </PokemonContextProvider>
        </div>
    );
}

export default App;
