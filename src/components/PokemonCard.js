import React, { useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonContext';

const PokemonCard = () => {
    const { pokemonData } = useContext(PokemonContext);

    const name = pokemonData.name && pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);
    const id = pokemonData.id < 100 ? `0${pokemonData.id}` : pokemonData.id;
    const image = { ...pokemonData.sprites }.front_default;
    const types = Object.keys({ ...pokemonData.types }).map((key) => pokemonData.types[key]);
    const height = (pokemonData.height * 0.1).toFixed(2);
    const weight = (pokemonData.weight * 0.1).toFixed(2);
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
                        <li>
                            <div className="info">
                                <h4>HP:</h4>
                                <p>{{ ...stats[0] }.base_stat}</p>
                            </div>
                            <div className="bar">
                                <div className="bar-bg hp" style={{ width: ({ ...stats[0] }.base_stat / 255) * 100 + '%' }}></div>
                            </div>
                        </li>
                        <li>
                            <div className="info">
                                <h4>Attack:</h4>
                                <p>{{ ...stats[1] }.base_stat}</p>
                            </div>
                            <div className="bar">
                                <div className="bar-bg atk" style={{ width: ({ ...stats[1] }.base_stat / 255) * 100 + '%' }}></div>
                            </div>
                        </li>
                        <li>
                            <div className="info">
                                <h4>Defense:</h4>
                                <p>{{ ...stats[2] }.base_stat}</p>
                            </div>
                            <div className="bar">
                                <div className="bar-bg def" style={{ width: ({ ...stats[2] }.base_stat / 255) * 100 + '%' }}></div>
                            </div>
                        </li>
                        <li>
                            <div className="info">
                                <h4>Sp. Atk:</h4>
                                <p>{{ ...stats[3] }.base_stat}</p>
                            </div>
                            <div className="bar">
                                <div className="bar-bg sp-atk" style={{ width: ({ ...stats[3] }.base_stat / 255) * 100 + '%' }}></div>
                            </div>
                        </li>
                        <li>
                            <div className="info">
                                <h4>Sp. Def:</h4>
                                <p>{{ ...stats[4] }.base_stat}</p>
                            </div>
                            <div className="bar">
                                <div className="bar-bg sp-def" style={{ width: ({ ...stats[4] }.base_stat / 255) * 100 + '%' }}></div>
                            </div>
                        </li>
                        <li>
                            <div className="info">
                                <h4>Speed:</h4>
                                <p>{{ ...stats[5] }.base_stat}</p>
                            </div>
                            <div className="bar">
                                <div className="bar-bg spd" style={{ width: ({ ...stats[5] }.base_stat / 255) * 100 + '%' }}></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;
