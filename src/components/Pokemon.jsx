import { useEffect, useState } from "react";

export default function Pokemon({pokemon}) {
    // const {name} = pokemon
    // console.log(pokemon)
    useEffect(() => {
        // console.log('poke', pokemon)
    }, [])

    return(
        <div>
            <p>hello {pokemon.name} </p>            
        </div>
    )
}

/**
   * 
   id: number
   name: string
   moves: [
    {
      move: {
        name: string
        url: string
      }
    }
   ]
   */