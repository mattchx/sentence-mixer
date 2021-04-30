import React from 'react';
import Game from './components/Game';
import styled from '@emotion/styled';

function App() {
  return (
    <Container>
        <Game />
    </Container>
  );
}

export default App;

const Container = styled.div`
  background: white;
  margin: 100px;
  border-radius: 10px;
`;
