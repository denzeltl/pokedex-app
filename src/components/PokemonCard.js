import React, { useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonContext';

const PokemonCard = () => {
    const { pokemonData } = useContext(PokemonContext);

    const name = pokemonData.name && pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);
    const id = pokemonData.id < 100 ? `0${pokemonData.id}` : pokemonData.id;
    const image = { ...pokemonData.sprites }.front_default;
    const types = Object.keys({ ...pokemonData.types }).map((key) => pokemonData.types[key]);
    const height = pokemonData.height * 0.1;
    const weight = pokemonData.weight * 0.1;
    const abilities = Object.keys({ ...pokemonData.abilities }).map((key) => pokemonData.abilities[key]);
    const stats = Object.keys({ ...pokemonData.stats }).map((key) => pokemonData.stats[key]);

    console.log(pokemonData);

    return (
        <div className="pokemon-card">
            <div className="container">
                <div className="name">
                    <h2>
                        {name} <span>#{id}</span>
                    </h2>
                </div>
                <div className="image">
                    <img src={image} alt={name} />
                </div>
                <ul className="type">
                    {types.map((type) => (
                        <li key={type.type.name} className={type.type.name}>
                            {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="container">
                <div className="details">
                    <h3>Details</h3>
                    <div className="height">
                        <h4>Height:</h4>
                        <p>{height} m</p>
                    </div>
                    <div className="weight">
                        <h4>Weight:</h4>
                        <p>{weight} kg</p>
                    </div>
                    <div className="abilities">
                        <h4>Abilities:</h4>
                        <ul>
                            {abilities.map((ability) => (
                                <li key={ability.ability.name}>{ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container has-no-mb">
                <div className="stats">
                    <h3>Base Stats</h3>
                    <ul>
                        {stats.map((stat) => (
                            <li key={stat.stat.name}>
                                <h4>{stat.stat.name}:</h4>
                                <div>{stat.base_stat}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;
