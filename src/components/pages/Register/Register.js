import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDove,
} from '@fortawesome/free-solid-svg-icons';
import './Register.scss';

const Register = () => (
  <div className="form__container">
    <div className="logo">
      <FontAwesomeIcon icon={faDove} />
    </div>
    <div className="form__header">
      Register
    </div>
    <form className="form__items">
      <div className="form__group">
        <label htmlFor="name" className="form__label">Name</label>
        <input type="text" name="name" id="name" className="form__input" />
      </div>
      <div className="form__group">
        <label htmlFor="email" className="form__label">Email</label>
        <input type="text" name="email" id="email" className="form__input" />
      </div>
      <div className="form__group">
        <label htmlFor="password" className="form__label">Password</label>
        <input type="text" name="password" id="password" className="form__input" />
      </div>
      <button type="button" className="form__submit__btn">
        Register
      </button>
    </form>
  </div>
);

export default Register;
