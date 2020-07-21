import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import PokemonContextProvider from './contexts/PokemonContext';

ReactDOM.render(
    <PokemonContextProvider>
        <App />
    </PokemonContextProvider>,
    document.getElementById('root')
);
