import React, { useState } from 'react'
import './Users.css'
function Users({menuBtn}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [filter, setFilter] = useState('');
  const users = [
    { id: 1, name: 'John Doe', email: '8PZ8w@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: '8PZ8w@example.com', role: 'Moderator' },
  ]

  return (
   <section className={menuBtn ? 'hide' : ''} id='content'>
    <main>
    <div class="head-title">
				<div class="left">
					<h1> User pages.</h1>
					<ul class="breadcrumb">
						<li>
							<a href="/">Dashboard</a>
						</li>
						<li><i class='bx bx-chevron-right' ></i></li>
						<li>
							<a class="active" href="#">User</a>
						</li>
					</ul>
				</div>
			</div>
    <div className="search-bar">
    <button  className="create-button">+ Create</button>
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

  <div className="user-table">
      {/* Заголовок с фильтрами */}
      <div className="table-header">
        <div>All ({users.length}) / Administrator (1) / Moderator (1) / User (0)</div>
        {/* Элементы для фильтрации */}
      </div>

      <table>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>User</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody> 
          {/* Отображение данных пользователей с пагинацией */}
          {users.slice((currentPage - 1) * 10, currentPage * 10).map(user => (
            <tr key={user.id}>
              <td><input type="checkbox" checked={selectedUsers.includes(user.id)} /></td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Пагинация */}
      <div className="pagination">
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
        <span>{currentPage}</span>
        <button disabled={currentPage  
 === Math.ceil(users.length / 10)} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      </div>
    </div>

    </main>
   </section>
  )
}

export default Users