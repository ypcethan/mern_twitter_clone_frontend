import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import { loadUser } from '../../../redux/auth/authAction';

const AppRoute = ({
  component: Component, layout: Layout, isPrivate = true, ...rest
}) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(loadUser());
    }
  }, []);

  const appRoute = (
    <Route
      {...rest}
      render={(props) => (isPrivate && !isAuthenticated
        ? (
          <Redirect to="/login" />
        )
        : (
          <Layout>
            <Component {...props} />
          </Layout>
        ))}
    />
  );
  const spinner = (
    <div className="spinner">
      <ClipLoader
        size={150}
        color="#1B91DA"
      />
    </div>
  );
  return (
    isLoading
      ? spinner
      : appRoute
  );
};

export default AppRoute;
