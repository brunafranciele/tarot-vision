import React, { useState, useContext, useEffect } from 'react';
import tarotContext from '../context/tarotContext';

function MainPage() {
  const { dataAPI, getDataFromAPI, nameUser } = useContext(tarotContext);

  useEffect(async () => {
    getDataFromAPI();
  }, [])

  return (
    <div>
    <p>{ console.log(dataAPI) }</p>
    <p>{ console.log(dataAPI.value) }</p>
    <p>{ console.log(dataAPI.type) }</p>
    <p>{ console.log(dataAPI.name) }</p>
    </div>
  );
}

export default MainPage;
