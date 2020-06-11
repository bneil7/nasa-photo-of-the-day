import React, {useEffect, useState} from "react";
import "./App.css";
import axios from 'axios'
import {BASE_URL, API_KEY} from './Constants/index'
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'

function App() {

  const [apodData, setApodData] = useState([])

  useEffect(() => {
    console.log('🥇 ONLY AFTER FIRST RENDER')
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
       console.log('AW YEAH', res.data)
       setApodData(res.data)
      })
      .catch(error => {
      debugger
      console.log('OH NO', error)
      })
  }, []);

  return (
    <div className="App">
      <header>
        <h1 className='title'>{apodData.title}</h1>
        <h2 className='date'>{apodData.date}</h2>
      </header>
      <img className='img-section' src={apodData.url} alt="redundant word for pic goes here"></img>
      <section className='explanation'>{apodData.explanation}</section>
      <p>
        <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <footer className='copyright'>{apodData.copyright}</footer>
    </div>
  );
}

export default App;
