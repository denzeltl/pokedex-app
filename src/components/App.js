import React from 'react';
import Header from './Header';
import Searchbar from './Searchbar';
import PokemonCard from './PokemonCard';

function App() {
    return (
        <div className="app">
            <Header />
            <Searchbar />
            <PokemonCard />
        </div>
    );
}

export default App;
