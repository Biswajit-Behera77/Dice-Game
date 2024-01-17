import styled from "styled-components";

const RoleDice = ({roleDice,currentDice}) => {


  return (
    <DiceContainer>
    <div className="dice" onClick={roleDice}>
        <img src={`/Dice/dice${currentDice}.png`} alt="one" />
        </div>  
        <p>Click On Dice to roll </p>
    </DiceContainer>
  )
}

export default RoleDice;

 const DiceContainer =styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 margin-top: 48px;

 .dice{
  cursor: pointer;
 }
 p{
  font-size: 24px;
 }
 `;