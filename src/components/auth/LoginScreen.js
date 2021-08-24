import React from 'react';
import { Link } from 'react-router-dom';

export const LoginScreen = () => {
  return (
    <>
      <h3 className='auth__title mb-5'>LoginScreen</h3>
      <form>
        <input
          type='email'
          name='email'
          placeholder='email'
          className='auth__input'
          autocomplete='off'
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          className='auth__input'
        />
        <button className='btn btn-primary btn-block' type='submit'>
          Login
        </button>
      </form>
      <hr />
      <div className='auth__social-networks'>
        <p>Login with social networks</p>
        <div className='google-btn'>
          <div className='google-icon-wrapper'>
            <img
              className='google-icon'
              src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
              alt='google button'
            />
          </div>
          <p className='btn-text'>
            <b>Sign in with google</b>
          </p>
        </div>

        <Link className='mt-5' to='/auth/register'>
          Create a new Account
        </Link>
      </div>
    </>
  );
};