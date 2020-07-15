import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDove,
} from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, clearError } from '../../../redux/auth/authAction';
import { setAlert } from '../../../redux/alert/alertAction';
import '../Register/Register.scss';

const Login = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector((state) => state.auth.error);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const { register, handleSubmit, errors } = useForm();

  const onSubmitForm = () => {
    dispatch(loginUser({
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
        Login
      </div>
      <form className="form__items" onSubmit={handleSubmit(onSubmitForm)}>

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
          Login
        </button>
      </form>
      <div>
        Don't have an account yet ?
        <Link to="/register" className="redirect-link">Register</Link>
      </div>
    </div>
  );
};

export default Login;
