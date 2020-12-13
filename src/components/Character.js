import React from 'react'
import styled from 'styled-components'


const CharDiv = styled.div`
    width: 600px;
    background: grey;
    color: purple;
    border-radius: 10px;
    margin: 2% 2% 2% 2%;
    display: flex;
    display: flex;
`


const StyledImg = styled.img`  
    border-radius: 10px;

`

const InfoDiv = styled.div`
    padding: 13.5px;
`

const SubDiv = styled.div`
    justify-content: flex-start;
    align-items: center;

`

const Character = (props) =>{
    const {details} = props

    return (
        <div className="charList-container"> 
            <CharDiv className="charInfo-Wrapper">
               <div>
               <StyledImg src={details.image}></StyledImg>
               </div>
            
                <InfoDiv>
                    <div>
                        <h3>Name:{details.name}</h3>
                        <span class='status-icon'>{details.status} - {details.species} - {details.gender}</span>
                    </div>
                    <div>
                        <span>Last known location</span>
                        <h3>{details.location.name}</h3>
                    </div>                
                </InfoDiv>
            </CharDiv>

        </div>
    )

}

export default Character;