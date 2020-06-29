import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [characterList, setCharacterList] = useState([]);
  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log('This is the res from useEffect of CharacterList: ', res)
        setCharacterList(res.data.results);
      })
      .catch(err => {
        console.log('There was an error in useEffect of CharacterList: ', err)
      })
  }, []);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characterList.map(character => {
        return
          <Character
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            image={character.image}
            />
      })}
    </div>
  );
}

export default App;
