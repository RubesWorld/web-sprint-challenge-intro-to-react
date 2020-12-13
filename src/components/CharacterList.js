import React, {useState} from 'react'
import Character from './Character'
import styled from 'styled-components'

 const CharacterList = (props) => {
    const { details } = props;

    return (
        <div className="charList-container">
    
            {
        details.map( detailObj => {
               return <Character key={detailObj.id} details={detailObj}/>
           })
        }
    
        
           </div>
    );
}

export default CharacterList