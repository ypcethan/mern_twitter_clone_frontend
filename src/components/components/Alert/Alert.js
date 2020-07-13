import React from 'react';
import { useSelector } from 'react-redux';
import './Alert.scss';

const Alert = () => {
  const alerts = useSelector((state) => state.alert);
  return (
    <div className="alert__container">
      {alerts.map((alert) => (
        <div className={`alert alert--${alert.type}`} key={alert.id}>
          {alert.message}
        </div>
      ))}
    </div>
  );
};

export default Alert;
