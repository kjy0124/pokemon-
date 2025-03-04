import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMultiplePokemonById = createAsyncThunk(
  "pokemon/fetchMultiplePokemonById",
  async (maxPokemonId) => {
    // pokemon들의 데이터를 여러개 받기 위해 form()로부터 배열 데이터를 불러옴
    const numberArray = Array.from({ length: maxPokemonId }, (_, i) => i + 1);

    const fetchAPI = async (pokemonId) => {
      //API 데이터 요청 후 data에 잘 받아오는지 확인
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`
      );

      //요청한 데이터를 json로 받아옴
      const data = await response.json();

      const pokemonData = {
        id: pokemonId,
        name: data.names.find((el) => el.language.name === "ko").name,
        description: data.flavor_text_entries.find(
          (el) => el.language.name === "ko"
        ).flavor_text,
        front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
        back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`,
      };
      return pokemonData;
    };

    return await Promise.all(numberArray.map((el) => fetchAPI(el)));
  }
);
//Promise는 js에서 비동기 작업을 처리할 때 사용하는 객체
