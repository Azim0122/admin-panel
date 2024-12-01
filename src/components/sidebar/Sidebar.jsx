import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
function Sidebar({HandleClick, menuBtn, setMenuBtn}) {	
	const [activeItem, setActiveItem] = useState(null);
	const location = useLocation();

	useEffect(() => {
	  if (location.pathname === '/') {
		setActiveItem('dashboard');
	  }else if (location.pathname === '/pages') {
		setActiveItem('pages');
	  }else if (location.pathname === '/gallery') {
		setActiveItem('gallery');
	  }else if (location.pathname === '/users') {
		setActiveItem('users');
	  }else if (location.pathname === '/roles') {
		setActiveItem('roles');
	  }else if (location.pathname === '/engines') {
		setActiveItem('engines');
	  }else if (location.pathname === '/categories') {
		setActiveItem('categories');
	  }else if (location.pathname === '/posts') {
		setActiveItem('posts');
	  }else if (location.pathname === '/plugins') {
		setActiveItem('plugins')
	  }else if(location.pathname === '/settings'){
		setActiveItem('settings')
	  }
	}, [location]);
  
	const handleClick = (itemId) => {
	  setActiveItem(itemId);
	};
  return (
    <div>
        <section className={menuBtn ? 'hide' : ''} id="sidebar" >
		<a href="#" class="brand">
			<i class='bx bxs-smile'></i>
			<span class="text">Sfera</span>
		</a>
		<ul class="side-menu top">
			<h5>Managment</h5>
		<li className={activeItem === 'dashboard' ? 'active' : ''}>
        <Link  to={"/"} onClick={() => {handleClick('dashboard')
		HandleClick()
		 }}>
          <i className='bx bxs-dashboard' ></i>
          <span className="text">Dashboard</span>
        </Link>
      </li>
			<li className={activeItem === 'pages' ? 'active' : ''}>
				<Link onClick={() => {handleClick('pages')
					HandleClick()
				}} to={"/pages"}>
					<i class='bx bxs-news'></i>
					<span class="text">Pages</span>
				</Link>
			</li>
			<li className={activeItem === 'gallery' ? 'active' : ''}>
				<Link onClick={() => {handleClick('gallery')
					HandleClick()
				}} to={"/gallery"}>
					<i class='bx bxs-image' ></i>
					<span class="text">Gallery</span>
				</Link>
			</li>
			<li className={activeItem === 'users' ? 'active' : ''}>
				<Link onClick={() => {handleClick('users')
					HandleClick()
				}} to={"/users"}>
					<i class='bx bxs-user' ></i>
					<span class="text">Users</span>
				</Link>
			</li>
			<h5>Content</h5>
			<li className={activeItem === 'engines' ? 'active' : ''}>
				<Link onClick={() => {handleClick('engines')
					HandleClick()
				}} to={"/engines"} >
					<i class='bx bx-search' ></i>
					<span class="text">Engines</span>
				</Link>
			</li>
			<li className={activeItem === 'categories' ? 'active' : ''}>
				<Link onClick={() => {handleClick('categories')
					HandleClick()
				}} to={"/categories"} >
					<i class='bx bx-category' ></i>
					<span class="text">Categories</span>
				</Link>
			</li>
			<li className={activeItem === 'posts' ? 'active' : ''}>
				<Link onClick={() => {handleClick('posts')
					HandleClick()
				}} to={"/posts"} >
					<i class='bx bx-news' ></i>
					<span class="text">Posts</span>
				</Link>
			</li>
			<li className={activeItem === 'plugins' ? 'active' : ''}>
				<Link onClick={() => {handleClick('plugins')
					HandleClick()
				}} to={"/plugins"} >
					<i class='bx bx-plug' ></i>
					<span class="text">Plugins</span>
				</Link>
			</li>
		</ul>
		<ul class="side-menu">
			<li className={activeItem === 'settings' ? 'active' : ''}>
				<Link  onClick={() => {handleClick('settings')
					HandleClick()
				}} to={"/settings"} >
					<i class='bx bxs-cog' ></i>
					<span class="text">Settings</span>
				</Link>
			</li>
			<li>
				<a href="#" class="logout">
					<i class='bx bxs-log-out-circle' ></i>
					<span class="text">Logout</span>
				</a>
			</li>
			
		</ul>
	</section>
    </div>
  )
}

export default Sidebar