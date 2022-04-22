
import React from 'react'
import { Outlet } from 'react-router-dom';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import PropTypes from 'prop-types'

export const PublicRoute = ({ isAuthenticated }) => {
    return isAuthenticated ? <CalendarScreen /> : <Outlet />;
}

PublicRoute.propTypes ={
    isAuthenticated: PropTypes.bool.isRequired
}
