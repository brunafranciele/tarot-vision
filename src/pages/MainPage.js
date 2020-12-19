import React, { useState, useContext, useEffect } from 'react';
import tarotContext from '../context/tarotContext';
import '../style/mainPage.css';

function MainPage() {
  const { dataAPI, getDataFromAPI, nameUser } = useContext(tarotContext);

  useEffect(() => {
    getDataFromAPI();
  }, []);

  if(dataAPI.length === 0) {
    console.log('if');
    return <h1>Loading...</h1>
  }

  return (
    <div>
    <img src={ `/${dataAPI.name_short}.png` } alt="tentativa de foto"/>
    {console.log(dataAPI)}
    {/* <p>{ console.log(dataAPI) }</p>
    <p>{ console.log(dataAPI.value) }</p>
    <p>{ console.log(dataAPI.type) }</p>
    <p>{ console.log(dataAPI.name) }</p>
    <p>{ console.log(dataAPI.name_short) }</p> */}
    </div>
  );
}

export default MainPage;
