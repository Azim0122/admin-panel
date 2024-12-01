import React from 'react'
import './Posts.css'
import { section } from 'framer-motion/client';
import moment from 'moment';
function Posts({menuBtn }) {
    const posts = [
        {
          id: 1,
          title: 'Which "Real Housewives" moment lives...',
          category: 'Entertainment',
          source: 'Buzzfeed Entertainment',
          views: 0,
          importedAt: '2024-11-14 08:01:00',
          originalPublishedAt: '2024-11-14 08:01:00',
        },
        // ... другие посты
      ];

    
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
    <table className="post-table">
      <thead>
        <tr>
          <th><input type="checkbox" /></th>
          <th>POST</th>
          <th>CATEGORY</th>
          <th>SOURCE</th>
          <th colSpan="3">Actions</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(post => (
          <tr key={post.id}>
            <td><input type="checkbox" /></td>
            <td>{post.title}</td>
            <td>{post.category}</td>
            <td>{post.source} <br /> {post.originalPublishedAt}</td>
           
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

export default Posts