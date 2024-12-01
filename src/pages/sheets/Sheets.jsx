import React, { useState } from 'react'
import './Sheets.css'
import { ul } from 'framer-motion/client';
import { Link } from 'react-router-dom';
function Sheets({menuBtn }) {
    const [data, setData] = useState([
        { title: 'Terms & Conditions', created: 'Apr 27, 2019', updated: '5 years ago' },
        {title: 'Contact Us', created: 'Mar 01, 2019', updated: '5 years ago'},
        {title: 'About Us0', created: 'Dec 27, 2018', updated: '5 years ago'}
        // ... другие элементы данных
      ]);
      const [currentPage, setCurrentPage] = useState(1);
      const [pageSize] = useState(20); // Размер страницы по 20 элементов
    
      // Функция для обработки клика на кнопку "Edit" или "Delete"
      const handleEditDelete = (id) => {
        // Логика обработки редактирования или удаления элемента с указанным id
        console.log('Edit/Delete clicked for item with id:', id);
      };
    
      // Функция для переключения страниц
      const handlePageChange = (page) => {
        setCurrentPage(page);
      };
    
      // Логика для отображения текущей страницы данных
      const currentData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

      const [curentPage, setCurentPage] = useState(1);

  const totalPages = 3  ;
  const handlePagechange = (page) => {
    setCurrentPage(page);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  const [selectedOption, setSelectedOption] = useState('Newest');

  const onSort = (sortedData) => {
    setData(sortedData);
  };
  
  const handleSort = (option) => {
    setSelectedOption(option);
    let sortedData = [...data];

    switch (option) {
      case 'Oldest':
        sortedData.sort((a, b) => a.createdAt - b.createdAt);
        break;
      case 'Alphabetic (A-Z)':
        sortedData.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'Alphabetic (Z-A)':
        sortedData.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        sortedData.sort((a, b) => b.createdAt - a.createdAt);
    }

    onSort(sortedData);
  };
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <section className={menuBtn ? 'hide' : ''} id='content'>
    <main>
    <div class="head-title">
				<div class="left">
					<h1> Manage pages.</h1>
					<ul class="breadcrumb">
						<li>
							<a href="#">Dashboard</a>
						</li>
						<li><i class='bx bx-chevron-right' ></i></li>
						<li>
							<a class="active" href="#">Pages</a>
						</li>
					</ul>
				</div>
			</div>
            <div className="button-block">
      <Link to="#" className="create-button">+ Create</Link>
      
      <div className="sort-dropdown">
      <button onClick={handleClick} className="dropdown-button">
        Sort: {selectedOption} <span>▼</span>
      </button>
      <ul onClick={handleClick} className={`dropdown-menu ${isActive ? 'active' : ''}`}>
        <li onClick={() => handleSort('Newest')}>Newest</li>
        <li onClick={() => handleSort('Oldest')}>Oldest</li>
        <li onClick={() => handleSort('Alphabetic (A-Z)')}>Alphabetic (A-Z)</li>
        <li onClick={() => handleSort('Alphabetic (Z-A)')}>Alphabetic (Z-A)</li>
      </ul>
    </div>
    </div>
            <table className="my-table">
      <thead>
        <tr>
          <th>Page Title</th>
          <th>Created</th>
          <th>Updated</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {currentData.map((item) => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.created}</td>
            <td>{item.updated}</td>
            <td>
              <button onClick={() => handleEditDelete(item.id)}>Edit</button>
              <button onClick={() => handleEditDelete(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="pagination">
      {curentPage > 1 && (
        <button className="pagination-button" onClick={() => handlePagechange(currentPage - 1)}>Prev.</button>  
      )}
      {pageNumbers.map(number => (
        <button
          key={number}
          className={`pagination-button ${number === curentPage ? 'active' : ''}`}
          onClick={() => handlePagechange(number)}
        >
          {number}  
        </button>
      ))}
      {curentPage < totalPages && (
        <button className="pagination-button" onClick={() => handlePagechange(currentPage + 1)}>Next</button>
      )}
    </div>   
    </main>
   </section>
  )
}

export default Sheets