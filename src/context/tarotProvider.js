import React, { useState } from 'react';
import tarotContext from './tarotContext';
import fetchTarot from '../services/GetAPI';
import { Redirect } from 'react-router-dom';

function TarotProvider({ children }) {
  const [nameUser, setNameUser] = useState('');
  const [dataAPI, setDataAPI] = useState([]);
  const [src, setSrc] = useState('');

  const getDataFromAPI = async () => {
    const cards = await fetchTarot();
    setDataAPI(cards);
  };

  function loadImage(name) {
    import(`../images/${name}.png`)
      .then(image => {
        console.log(image.default); // This will show an object with a `default` property as the image you imported
        setSrc(image.default);
      })
      .catch((error) => <Redirect to="/" />);
  }

  const valueProvider = {
    getDataFromAPI,
    dataAPI,
    setDataAPI,
    nameUser,
    setNameUser,
    src,
    loadImage,
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
