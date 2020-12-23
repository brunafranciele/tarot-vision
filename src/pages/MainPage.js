import React, { useContext, useEffect } from 'react';
import tarotContext from '../context/tarotContext';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../style/mainPage.css';

function MainPage() {
  const { dataAPI, getDataFromAPI, nameUser, loadImage } = useContext(tarotContext);

  useEffect(() => {
    getDataFromAPI();
  }, [])

  function handleClick() {
    loadImage(dataAPI.name_short)
  }
  if(dataAPI.length === 0) {
    <h1>Loading...</h1>
  }
  
  return (
    <div className="bodyMain">
      <div>
        <h1 className="question">{ nameUser ? nameUser : 'Querent' }, think about a question...</h1>
      </div>
        <button className="button" type="button" onClick={ handleClick }>
          <Link to="/answer" style={ { textDecoration: 'none', color: 'white' } }>
            Get my answer
          </Link>
        </button>
      <div className="div-footer">
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
