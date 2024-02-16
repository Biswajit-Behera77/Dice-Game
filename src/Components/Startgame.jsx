import styled from 'styled-components';
import { Button } from '../styled/Button';
const Startgame=({toggle}) => {
  return (
     <Container>
        <div>
        <img src="/images/dicess.png" alt="main pic" />
        </div>
        <div className='Content'>
            <h1>Dice game</h1>
             <Button onClick={toggle}>Play Now</Button>
        </div>
     </Container>
  );
}

export default Startgame;

const Container = styled.div`
  max-width:1100px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;

  .Content {
    h1{
        font-size: 96px;
        white-space: nowrap;
    } 
}
`;


