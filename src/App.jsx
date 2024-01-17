import styled from "styled-components";
import Startgame from "./Components/Startgame";
import {useState} from "react";
import GamePlay from "./Components/GamePlay";

const Button=styled.button``;

function App() {
 const [isGameStarted, setIsGameStarted]= useState(false);

 const toggleGamePlay=()=>{
  setIsGameStarted((prev)=>!prev);
 };

  return (
    <>
    
     {isGameStarted ?  <GamePlay/> :   <Startgame toggle={toggleGamePlay}
     />}  
     
    </>
    
  );
}

export default App;
