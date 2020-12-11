import React, {useState, useEffect} from 'react';
import CharacterList from './components/CharacterList'
import './App.css';
import axios from 'axios'
import styled from 'styled-components'

let URL = 'https://rickandmortyapi.com/api/character'

const App = () => {
  const [details,setDetails] = useState([])

  useEffect(() =>{
    axios.get('https://rickandmortyapi.com/api/character/2')
      .then(res =>{
        setDetails(res.data)
        console.log(res.data)
      })
      .catch(err =>{
        console.log(err)
      })
  },[])

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Rick & Morty Characters</h1>
      <CharacterList details={details}/>
    </div>
  );
};

export default App;
