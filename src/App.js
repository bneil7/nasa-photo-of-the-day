import React, {useEffect, useState} from "react";
import "./App.css";
import axios from 'axios'
import {BASE_URL, API_KEY} from './Constants/index';
import Body from './Components/Body';
import styled from 'styled-components';

const WrapperDiv = styled.div`
  background-color: #191970;
  color: white;
  font-family: sans-serif;
  text-align: center;
  height: 100%;
  margin: 0 5;
  padding:5%;
`;

function App() {

  const [apodData, setApodData] = useState({})

  useEffect(() => {
    console.log('🥇 ONLY AFTER FIRST RENDER')
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
       console.log('AW YEAH', res.data)
       setApodData(res.data)
        // .then(res =>{ //
        //   console.log('yes', res.data) //
        //   axios.get( ${apodData.hdurl} )<-- example of using axios call inside to grab another endpoint from a URL inside the data
        // }) //
      })
      .catch(error => {
      debugger
      console.log('OH NO', error)
      })
  }, []);

  return (
    <WrapperDiv className="App">
      <Body data={apodData} />
    </WrapperDiv>
  );
}

export default App;
