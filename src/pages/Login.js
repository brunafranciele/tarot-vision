import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import tarotContext from '../context/tarotContext';
import LogoTarotVision from '../images/LogoTarotVision.png';
import '../style/login.css';

function Login() {
  const [nameLogin, setNameLogin] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const { setNameUser } = useContext(tarotContext);

  useEffect(() => {
    const two = 2;
    const minName = nameLogin.length >= two;
    if (minName) {
      setIsDisabled(false);
    }
  }, [nameLogin]);

  const handlePath = () => {
    window.location.replace('http://localhost:3000/main-page');
  };

  const handleRedirect = () => {
    setNameUser(nameLogin);
  };

  return (
    <main>
      <div className="logoLogin">
      <img src={ LogoTarotVision } alt="Logo Tarot Vision" />
      </div>
      <h1> What's your name, querent? </h1>
      <form>
        <input
          type="text"
          required="required"
          placeholder="Name"
          onChange={({ target }) => setNameLogin(target.value)}
        />
        <div>
          <Link to="/main-page">
            <button
              type="button"
              disabled={isDisabled}
              onClick={handleRedirect}
            >
              Start
          </button>
          </Link>
        </div>
      </form>
    </main>
  );
}

export default Login;
