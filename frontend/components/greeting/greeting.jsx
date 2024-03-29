import React from 'react';
import { NavLink } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal }) => {

  const sessionLinks = () => (
    <nav className="login-signup">
      <button onClick={() => openModal('login')}>Login</button>
      &nbsp;or&nbsp;
      <button onClick={() => openModal('signup')}>Signup</button>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  if(currentUser){
    return (
      <>
        {personalGreeting(currentUser, logout)}
        <NavLink className="header-button" to="/users/:userId">Profile</NavLink>
      </>
    );
  } else {
    return sessionLinks();
  }
};

export default Greeting;
