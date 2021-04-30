import styled from '@emotion/styled'

export const Button = styled.button`
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    padding: 9px 36px`

export const Card = styled.div`
  padding: 10px;
  border: 2px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`

export const Content = styled.div`
  padding: 10px;
  font-family: arial, sans-serif;
  line-height: 30px;
`

export const Photo = styled.div`
  opacity: 0.5;
  align-self: flex-start;
  margin: 25px;
  min-width: 150px;
  max-width: 300px;
  height: 150px;
  padding: 20px;
  border: 2px solid purple;
  background-color: lightblue;
  font-family: courier, serif;
  border-radius: 10px;
  text-align: center;
`

export const Section = styled.div`
  max-width: 800px;
  padding: 20px;
`

export const Title = styled.h1`
  color: purple;
  font-size: 1.5rem;`

  
export const Container = styled.div`
  padding: 15px;
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${2}, auto);
  grid-template-rows: auto;
  background-color: #2196f3;
  padding: 5px;
`;
export const Item = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid black;
  text-align: center;
  padding: 10px;
`;