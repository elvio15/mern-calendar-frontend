
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';

export const Navbar = () => {

  const {name} = useSelector( state => state.auth );
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(startLogout());
  }

  return (
    <div className='navbar navbar-dark bg-dark mb-4'>
        <span className='navbar-brand'>
            {name}
        </span>

        <button 
          className='btn btn-outline-danger'
          onClick={ handleLogOut }
        >
            <i className='fas fa-sign-out-alt' />
            <span> Salir</span>
        </button>
        
    </div>
  )
}
