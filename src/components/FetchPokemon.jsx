import React, {useState} from "react";
import axios from 'axios'



const FetchPokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    const fetchPokeWithThen = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
        .then(response => {
            return response.json();
        })

        .then(responseJson => {
            // console.log(jsonResponse)
            setPokemon(responseJson.results)
            // console.log(pokemon.results[0].name)
        })

        .catch(err => {
            console.log(err)
        })

        // const pokeArr = pokemon.results[0].name
        // console.log(pokeArr)

        
    }
    const axiosFetching = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
            .then(response=>{
                console.log(response.data.results) //axios is .data because results is further nested
                setPokemon(response.data.results)
            })
            .catch(err=>{
                console.log(err)
            })
    }    

    return (
        <div>
            <h1>Fetch Poke!</h1>
            <button onClick={axiosFetching}>Poke .then</button>
            <ul>
                {pokemon && pokemon.map((yourPoke, idx) => 
                    <li key={idx}>{yourPoke.name}</li>
                )}
            </ul>
        </div>
    )
}
export default FetchPokemon