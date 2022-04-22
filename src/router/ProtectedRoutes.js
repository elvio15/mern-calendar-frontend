
import React from 'react';
import { Outlet } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import PropTypes from 'prop-types'


export const ProtectedRoutes = ({ isAuthenticated }) => {    
  return isAuthenticated ? <Outlet /> : <LoginScreen />;
}

ProtectedRoutes.propTypes ={
    isAuthenticated: PropTypes.bool.isRequired
}

