import { useState, useEffect } from 'react';
import axios from 'axios';

import styled from '@emotion/styled';

function Game() {
  const [sentence, setSentence] = useState('');
  const [flatSentArray, setFlatSentArray] = useState('');
  const [sentenceArray, setSentenceArray] = useState('');
  const [scrambled, setScrambled] = useState('');
  const [keyPress, setKeyPress] = useState('');
  const [position, setPosition] = useState(0);
  //const [counter, setCounter] = useState(0);

  const fetchData = async () => {
    const response = await axios.get(
      'https://api.hatchways.io/assessment/sentences/1'
    );
    const data = response.data.data.sentence;
    setSentence(data);
    setScrambled(joinScramble(data));
    setSentenceArray(createSentenceArray(data));
    setFlatSentArray(data.split(' ').join('').split(''));
  };

  const scramble = array => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const joinScramble = data => {
    return data
      .split(' ')
      .map(word => scramble(word.split('')).join(''))
      .join(' ');
  };

  const createSentenceArray = data => {
    return data
      .split(' ')
      .map(word => word.split('').map(letter => [letter, false]));
  };

  const handleKeyPress = e => {
    console.log(flatSentArray);
    setKeyPress(e.key);
    console.log(e.key);
    if (keyPress === flatSentArray[position]) {
      console.log('letter matches');
      setPosition(position + 1);
    }
    // Handle game over
    if (position === flatSentArray.length) {
      console.log('game over');
    }
    console.log(position);
  };

  useEffect(() => {
    fetchData();
    console.log('useEffect runs');
  }, []);

  //   useEffect(() => {
  //     window.addEventListener('keydown', handleKeyPress);
  //   }, []);
  let counter = 0;
  return (
    <InnerContainer>
      <Center>
        <Text1>{scrambled}</Text1>
        <P>Guess the sentence! Start typing</P>
        <P>The yellow black are meant for spaces</P>
        <Text2>Score: 0</Text2>
      </Center>
      <VStack>
        {sentenceArray &&
          sentenceArray.map((word, wordI) => {
            return (
              <HStack key={wordI + '-' + word}>
                {word.map((letter, letterI) => {
                  counter++;
                  if (counter >= position) {
                    return <Item key={letterI + '-' + letter} />;
                  } else {
                    return (
                      <ItemGreen key={letterI + '-' + letter}>
                        {letter[0]}
                      </ItemGreen>
                    );
                  }
                })}
                {wordI + 1 < sentenceArray.length && <Space />}
              </HStack>
            );
          })}
      </VStack>
      <input type="text" value={keyPress} onKeyPress={handleKeyPress} />
    </InnerContainer>
  );
}

export default Game;

const InnerContainer = styled.div`
  padding: 20px;
`;
const Center = styled.div`
  text-align: center;
  margin-bottom: 14px;
`;
const P = styled.p`
  margin: 14px 0px;
`;

const VStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const HStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
const Item = styled.div`
  background-color: #e1e1e1;
  text-align: center;
  padding: 10px;
  width: 100%;
  height: 40px;
  border: none;
`;

const ItemGreen = styled.div`
  background-color: green;
  color: white;
  text-align: center;
  padding: 10px;
  width: 100%;
  height: 40px;
  border: none;
`;

const Space = styled.div`
  background-color: #ffb74d;
  border: 1px solid black;
  text-align: center;
  padding: 10px;
  width: 100%;
  height: 40px;
  border: none;
`;

const Text1 = styled.h1`
  color: darkblue;
`;

const Text2 = styled.h2``;
