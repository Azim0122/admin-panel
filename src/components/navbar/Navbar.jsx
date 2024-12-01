import React, { useState } from 'react'
import './Navbar.css'
function Navbar({menuBtn , setMenuBtn,onDark}) {
    

  return (
  
   <section className={menuBtn ? 'hide' : ''} id='content'>
     <nav>
        <i onClick={() => setMenuBtn(!menuBtn)} className='bx bx-menu' ></i>
        <a href="#" class="nav-link">Categories</a>
        <form  action="#">
            <div class="form-input">
                <input type="search" placeholder="Search..." />
                <button  type="submit" class="search-btn"><i class='bx bx-search' ></i></button>
            </div>
        </form>
        <input onChange={onDark} type="checkbox" id="switch-mode" hidden />
        <label for="switch-mode" class="switch-mode"></label>
        <a href="#" class="notification">
            <i class='bx bxs-bell' ></i>
            <span class="num">8</span>
        </a>
        <a href="#" class="profile">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
        </a>
    </nav>
   </section>
  )
}

export default Navbar