import React, { useState, useEffect } from 'react';

function Login() {
  const [nameLogin, setNameLogin] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const two = 2;
    const minName = nameLogin.length >= two;
    if (minName) {
      setIsDisabled(false);
    }
  }, [nameLogin]);

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
        <button
          type="button"
          disabled={ isDisabled }
        >
          Start
        </button>
      </fieldset>
    </form>
    
  );
}

export default Login;
