import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDove,
} from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, clearError } from '../../../redux/auth/authAction';
import { setAlert } from '../../../redux/alert/alertAction';
import './Register.scss';

const Register = (props) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector((state) => state.auth.error);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const { register, handleSubmit, errors } = useForm();

  const onSubmitForm = () => {
    dispatch(registerUser({
      name,
      userName,
      email,
      password,
    }));
  };
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error) {
      dispatch(setAlert(error, 'danger'));
      dispatch(clearError());
    }
  }, [error, isAuthenticated]);
  return (
    <div className="form__container">
      <div className="logo">
        <FontAwesomeIcon icon={faDove} />
      </div>
      <div className="form__header">
        Register
      </div>
      <form className="form__items" onSubmit={handleSubmit(onSubmitForm)}>
        <div className="form__group">
          <label htmlFor="name" className="form__label">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form__input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={register({
              required: {
                value: true,
                message: 'Name is required',
              },
            })}
          />
          {errors.name && <span className="danger">{errors.name.message}</span>}
        </div>
        <div className="form__group">
          <label htmlFor="userName" className="form__label">User name</label>
          <input
            type="text"
            name="userName"
            id="userName"
            className="form__input"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            ref={register({
              required: {
                value: true,
                message: 'User name is required',
              },
            })}
          />
          {errors.userName && <span className="danger">{errors.userName.message}</span>}
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
            ref={register({
              required: {
                value: true,
                message: 'Email is required',
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Enter a valid e-mail address',
              },
            })}
          />
          {errors.email && <span className="danger">{errors.email.message}</span>}
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
            ref={register({
              required: {
                value: true,
                message: 'Password is required',
              },
              minLength: {
                value: 6,
                message: 'Password should be at least 6 characters long',
              },
            })}
          />
          {errors.password && <span className="danger">{errors.password.message}</span>}
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
