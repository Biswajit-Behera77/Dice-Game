import React from 'react'
import styled from 'styled-components';

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice Game</h2>
      <div className='text'>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>After Click on the dice if selected number is equal to 
            dice number you will get same point as dice{" "}
            <p>if you get wrong guess than 2 point will be dedcuted</p>  
        </p>
      </div>
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer=styled.div`
max-width: 800px;
margin: 0 auto;
margin-top: 40px;
background-color: #f1d7d7;
padding: 20px;
border-radius: 5px;
h2{
    font-size: 24px;
    font-weight: bold;
}
.text{
    margin-top: 24px;
}
`;