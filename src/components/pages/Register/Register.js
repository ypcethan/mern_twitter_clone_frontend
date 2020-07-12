import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDove,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { register } from '../../../redux/auth/authAction';
import './Register.scss';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const clearAll = () => {
    setName('');
    setEmail('');
    setPassword('');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({
      name,
      email,
      password,
    }));
    // clearAll();
  };
  return (
    <div className="form__container">
      <div className="logo">
        <FontAwesomeIcon icon={faDove} />
      </div>
      <div className="form__header">
        Register
      </div>
      <form className="form__items" onSubmit={handleSubmit}>
        <div className="form__group">
          <label htmlFor="name" className="form__label">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form__input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form__group">
          <label htmlFor="email" className="form__label">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            className="form__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form__group">
          <label htmlFor="password" className="form__label">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            className="form__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="form__submit__btn"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
