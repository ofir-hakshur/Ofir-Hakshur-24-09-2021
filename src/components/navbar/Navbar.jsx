import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import {useSelector, useDispatch} from 'react-redux';
import {toDark, toLight} from '../../actions/';

const Navbar = () => {
  
    const themes = useSelector(state => state.themes);
    const dispatch = useDispatch();

    return (
      <nav className="navbar-wrapper">
        <div>
          Herolo weather task - Ofir Hakshur
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
          <button onClick={themes == 'light' ? () => dispatch(toDark()) : () => dispatch(toLight())}>Dark/Light Theme</button>
        </div>
      </nav>
    )
}

export default Navbar