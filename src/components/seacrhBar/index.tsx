import React, { FormEvent, useState } from "react";
import { searchPokemon } from "../../services/api";

import styles from "./searchBar.module.scss";

type pokes = {
  id?: number;
  name?: string;
  sprites?: any;
};

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState<pokes>();

  const onChangeHandler = (e: { target: { value: string } }) => {
    setSearch(e.target.value);
  };

  const onSearchHandler = async (pokemon: string) => {
    const results = await searchPokemon(pokemon);
    setPokemon(results);
  };

  const handleSearch = (event?: FormEvent) => {
    event?.preventDefault();
    if (search === "") {
      setPokemon(undefined);
      return;
    }
    onSearchHandler(search);
  };

  return (
    <div className={styles.container}>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <div className={styles.divInput}>
              <input
                className={styles.input}
                type="search"
                placeholder="Buscar Pokemon..."
                aria-label="Search"
                onChange={onChangeHandler}
              />
            </div>
            <button className={styles.btnSearch} type="submit">
              Buscar
            </button>
          </form>
        </div>
      </nav>
      {pokemon ? (
        <div className={styles.card}>
          <div className="card">
            <div className={styles.pokemonId}>#{pokemon.id}</div>
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className={styles.pokeImg}
            />
            <div className={styles.linha}></div>
            <div className="card-body">
              <div className="card-text">
                <div className={styles.namePoke}>Nome: {pokemon.name}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.divResult}>
          <div className={styles.result}>Nenhum pokemon encontrado...</div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
