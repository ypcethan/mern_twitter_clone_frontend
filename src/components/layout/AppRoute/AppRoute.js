import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadUser } from '../../../redux/auth/authAction';

const AppRoute = ({
  component: Component, layout: Layout, isPrivate = true, ...rest
}) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(loadUser());
    }
  }, []);
  return (
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
};

export default AppRoute;
