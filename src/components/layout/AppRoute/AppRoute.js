import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AppRoute = ({
  component: Component, layout: Layout, isPrivate = true, ...rest
}) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

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
