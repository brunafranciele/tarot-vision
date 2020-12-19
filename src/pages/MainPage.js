import React, { useState, useContext, useEffect } from 'react';
import tarotContext from '../context/tarotContext';
import * as ImportImage from '../components/ImportImage';

function MainPage() {
  const { dataAPI, getDataFromAPI, nameUser } = useContext(tarotContext);
  require (`../images/${dataAPI.name_short}.png`);

  useEffect(async () => {
    getDataFromAPI();
  }, [])

  return (
    <div>
    <img src={ ImportImage }/>
    <p>{ console.log(dataAPI) }</p>
    <p>{ console.log(dataAPI.value) }</p>
    <p>{ console.log(dataAPI.type) }</p>
    <p>{ console.log(dataAPI.name) }</p>
    </div>
  );
}

export default MainPage;
