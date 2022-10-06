import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    
    <div className='navList'>
      <a href="./"><img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" alt="" height='50px' width='150px' /></a>
      <ul>
          <li><NavLink to="/Dayone" >DayOne</NavLink></li>
          <li><NavLink to="/Daytwo" >DayTwo</NavLink></li>
          <li><NavLink to="/Daythree">DayThree</NavLink></li>
          <li><NavLink to="/Dayfour" >DayFour</NavLink></li>
          <li><NavLink to="/Dayfive" >DayFive</NavLink></li>
          <li><NavLink to="/Daysix" >DaySix</NavLink></li>
      </ul>
    </div>


    </>
  )
}

export default Navbar