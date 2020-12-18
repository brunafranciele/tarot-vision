import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import tarotContext from '../context/tarotContext';

function Login() {
  const [nameLogin, setNameLogin] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const { setName } = useContext(tarotContext);

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
    setName(nameLogin);
  };

  return (
    <form>
      <fieldset>
        <label>
          <input
            type="text"
            required="required"
            placeholder="NAME"
            onChange={({ target }) => setNameLogin(target.value)}
          />
        </label>
        <Link to="/main-page">
          <button
            type="button"
            disabled={isDisabled}
            onClick={handleRedirect}
          >
            Start
          </button>
        </Link>
      </fieldset>
    </form>

  );
}

export default Login;
