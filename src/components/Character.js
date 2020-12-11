import React from 'react'
import styled from 'styled-components'


const CharDiv = styled.div`
    width: 100%;
    background: grey;
    color: purple;
    border-radius: 10px;
    margin: 2% 2% 2% 2%;
    padding: 2em 2em 2em 2em;


    

`

const InfoDiv = styled.div`
    display: flex;
`

const Character = (props) =>{
    const {details} = props

    return (
        <CharDiv className="char-container"> 
            <InfoDiv className="char-info">
               <div>
               <img src={details.image}></img>
               </div>
            
                <div>
                    
                    <h3>Name:{details.name}</h3>
                    <h2>Species:{details.species}</h2>
                    <h2>Gender:{details.gender}</h2>
                </div>
            </InfoDiv>
            
        </CharDiv>
    )

}

export default Character;