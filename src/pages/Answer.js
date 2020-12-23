import React, { useContext } from 'react';
import tarotContext from '../context/tarotContext';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../style/answer.css';

function Answer() {
  const { dataAPI, src } = useContext(tarotContext);

  if(dataAPI.length === 0) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="bodyAnswer">
      <div className="div-image">
      <img src={ src } alt="tentativa de foto"/> 
      </div>
      <div className="div-answer">
        <h2 className="text-answer h2answer">{ dataAPI.name }</h2>
        <p className="text-answer">{ dataAPI.meaning_up }</p>
        <p className="text-answer">{ dataAPI.meaning_rev }</p>
        <p className="text-answer">{ dataAPI.desc }</p>
        <button className="play-again" type="button">
          <Link to="/main-page" style={ { textDecoration: 'none', color: 'white' } }>
            Play Again
          </Link>
        </button>
      </div>
      <div>
        <button className="go-home" type="button">
          <Link to="/" style={ { textDecoration: 'none', color: 'white' } }>
            Home Page
          </Link>
        </button>
      </div>
      <div className="div-footer-answer">
        <Footer />
      </div>
    </div>
  );
}

export default Answer;
