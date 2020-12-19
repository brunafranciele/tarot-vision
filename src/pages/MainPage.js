import React, { useState, useContext, useEffect } from 'react';
import tarotContext from '../context/tarotContext';
import Answer from '../components/Answer';
import Footer from '../components/Footer';
import '../style/mainPage.css';

function MainPage() {
  const { dataAPI, getDataFromAPI, nameUser } = useContext(tarotContext);
  const [showCard, setShowCard] = useState(false);

  function handleClick() {
    getDataFromAPI();
    setShowCard(true);
  }

  return (
    <div className="bodyMain">
      <div>
        {showCard ?
        <Answer /> :
        <h1 className="question">{ nameUser ? nameUser : 'Querent' }, think about a question...</h1>
        }
      </div>
      {!showCard && <button className="button" type="button" onClick={ handleClick }>Get my answer</button>}
      <div className="div-footer">
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
