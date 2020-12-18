import React, { useState } from 'react';
import tarotContext from './tarotContext';

function TarotProvider({ children }) {
  const [name, setName] = useState('');
  const [data, setData] = useState([]);

  // const getData = async () => {
  //   const cards = await fetchTarot();
  //   setData(cards);
  // };
  
  const valueProvider = {
    data,
    setData,
    name,
    setName,
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
