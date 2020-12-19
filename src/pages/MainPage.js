import React, { useState, useContext, useEffect } from 'react';
import tarotContext from '../context/tarotContext';

function MainPage() {
  const { dataAPI, getDataFromAPI, name } = useContext(tarotContext);
  const [ mainCard, setMainCard ] = useState([]);

  useEffect(async () => {
    const returnAPI = await getDataFromAPI();
    setMainCard(returnAPI)
  }, [])

  return (
    <p>{ console.log(mainCard) }</p>
  );
}

export default MainPage;
