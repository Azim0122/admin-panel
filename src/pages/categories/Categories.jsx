import React from 'react'
import './Categories.css'
import { Link } from 'react-router-dom'

function Categories({HandleClick, menuBtn, setMenuBtn}) {
    const categories = [
      { id: 1, name: 'Category 1', order: 1, icon: 'icon1' },
      { id: 2, name: 'Category 2', order: 2, icon: 'icon2' },
      { id: 3, name: 'Category 3', order: 3, icon: 'icon3' }

    ]
  return (
   <section className={menuBtn ? 'hide' : ''} id='content'>
    <main>
    <div class="head-title">
				<div class="left">
					<h1> Category pages.</h1>
					<ul class="breadcrumb">
						<li>
							<a href="/">Dashboard</a>
						</li>
						<li><i class='bx bx-chevron-right' ></i></li>
						<li>
							<a class="active" href="#">Category</a>
						</li>
					</ul>
				</div>
			</div>
      <div className="search-bar">
    <Link to="/create" className="create-button">+ Create</Link>
    <div className="search-container">
      <input type="text" placeholder="Search users..." />
     <select name="" id="">
       <option value="">Newest</option>
       <option value="">Oldest</option>
       <option value="">Alphabetic (A-Z)</option>
       <option value="">Alphabetic (Z-A)</option>
     </select>

    </div>
  </div>
    <table className="category-table">
    <thead>
      <tr>
        <th>CATEGORY NAME</th>
        <th>CATEGORY ORDER</th>
        <th>CATEGORY ICON</th>
        <th colSpan="3">Actions</th>
      </tr>
    </thead>
    <tbody>
      {categories.map(category => (
        <tr key={category.id}>
          <td>{category.name}</td>
          <td>{category.order}</td>
          <td>{category.icon}</td>
          <td><button>Edit</button></td>
          <td><button>Delete</button></td>
        </tr>
      ))}
    </tbody>
  </table>
    </main>
   </section>
  )
}

export default Categories