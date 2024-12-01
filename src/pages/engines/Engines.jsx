import React from 'react'
import './Engines.css'

function Engines({HandleClick, menuBtn, setMenuBtn}) {
    const data = [
        { id: '530b5e7ca4f8045d4', name: 'Videos' },
        { id: '530b5e7ca4f8045d4', name: 'News' },
        { id: '530b5e7ca4f8045d4', name: 'Subtitles ' },
        // ... другие данные
      ];

  return (
    <section className={menuBtn ? 'hide' : ''} id='content'>
        <main>
        <div class="head-title">
				<div class="left">
					<h1> Engine pages.</h1>
					<ul class="breadcrumb">
						<li>
							<a href="/">Dashboard</a>
						</li>
						<li><i class='bx bx-chevron-right' ></i></li>
						<li>
							<a class="active" href="#">Engine</a>
						</li>
					</ul>
				</div>
			</div>
        <div className="search-bar">
    <button className="create-button">+ Create</button>
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

  <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ENGINE NAME</th>
            <th>ENGINE CSE ID</th>
            <th colSpan="3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.id}</td>
              <td><button>Edit</button></td>
              <td><button>Delete</button></td>
              <td><button className="set-default">Set Default</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
       <div className="btns">
       <button>Prev</button>
        <span>1</span>
        <button>Next</button>
       </div>
        <span>Showing 1-20 of total 80 entries.</span>
      </div>
    </div>

        </main>
    </section>
  )
}

export default Engines