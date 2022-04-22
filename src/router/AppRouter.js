
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { startCheking } from '../actions/auth'
import { LoginScreen } from '../components/auth/LoginScreen'
import { CalendarScreen } from '../components/calendar/CalendarScreen'
import { ProtectedRoutes } from './ProtectedRoutes'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {

  const dispatch = useDispatch();
  const { checking, uid } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(startCheking());
  }, [dispatch])

  if (checking) {
    return (<h5>Espere...</h5>);
  }

  return (
    <Routes>
      <Route element={<PublicRoute isAuthenticated={!!uid} />}>
        <Route path='login' element={<LoginScreen />} />
      </Route>
      <Route element={<ProtectedRoutes isAuthenticated={!!uid} />}>
        <Route path='/' element={<CalendarScreen />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Route>
    </Routes>
  )
}
