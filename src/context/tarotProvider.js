import React, { useState } from 'react';
import tarotContext from './tarotContext';
import fetchTarot from '../services/GetAPI';

function TarotProvider({ children }) {
  const [nameUser, setNameUser] = useState('');
  const [dataAPI, setDataAPI] = useState({});

  const getDataFromAPI = async () => {
    const cards = await fetchTarot();
    setDataAPI(cards);
  };
  
  const valueProvider = {
    getDataFromAPI,
    dataAPI,
    setDataAPI,
    nameUser,
    setNameUser,
  }

  return(
    <tarotContext.Provider
      value= { valueProvider }
    >
      {children}
    </tarotContext.Provider>
  );
}

export default TarotProvider;
