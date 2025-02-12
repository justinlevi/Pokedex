import React, {Component} from 'react';
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const Pokecard = () => {
    let imgSrc = `${POKE_API}${this.props.id}.png`;
    
    return <div>
      <h1>(this.props.name)</h1>
      <img src={imgSrc}/>
      <div>Type: {this.props.type}</div>
      <div>EXP: {this.props.exp}</div>

    </div>
}

export default Pokecard;