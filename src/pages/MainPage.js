import React, { useState, useContext, useEffect } from 'react';
import tarotContext from '../context/tarotContext';
import * as ImportImage from '../components/ImportImage';

function MainPage() {
  const { dataAPI, getDataFromAPI, nameUser } = useContext(tarotContext);

  useEffect(async () => {
    getDataFromAPI();
  }, [])

  const temp = {name_short: 'ar00'};

  return (
    <div>
    <img src={ ImportImage[temp.name_short] } alt="tentativa de foto"/>
    <p>{ console.log(dataAPI) }</p>
    <p>{ console.log(dataAPI.value) }</p>
    <p>{ console.log(dataAPI.type) }</p>
    <p>{ console.log(dataAPI.name) }</p>
    </div>
  );
}

export default MainPage;
