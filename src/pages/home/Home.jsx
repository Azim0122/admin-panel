import React, { useState } from 'react'
import './Home.css' 
function Home({menuBtn , setMenuBtn}) {
	const [value, setValue] = useState(1);

	const handleChange = (event) => {
	  const newValue = parseInt(event.target.value);
	  if (!isNaN(newValue) && newValue >= 1) {
		setValue(newValue);
	  }
	};


  return (
    <section className={menuBtn ? 'hide' : ''} id='content'>
	<main>
			<div class="head-title">
				<div class="left">
					<h1>Dashboard Site overview</h1>
					<ul class="breadcrumb">
						
						<li>
							<a class="active" href="#">Dashboard</a>
						</li>
					</ul>
				</div>
			</div>
           <div className="boxs">
			<div className="box">
				<div className="box-top">
				<h6>Delete Old Posts</h6> 
			  <span></span>
				</div>
				<div className="box-center">
					<h6>Delete posts older than:</h6> 
					<form action="">
						<input type="number" value={value} onChange={handleChange} min="1" />
						<span>days</span>
					</form>
					<p>You can delete old imported posts manually from here.</p>
					<button className='bn632-hover bn26'>Delete</button>
				</div>
			</div>

			<div className="box">
				<div className="box-top">
				<h6>Setup Cron Job </h6> 
			  <span></span>
				</div>
				<div className="box-center">
					<h6>Dont forget to set-up cron jobs otherwise auto news import won't work.</h6> 
					
					<button className='bn632-hover bn26'>Go now</button>
				</div>
			</div>

			<div className="box">
				<div className="box-top">
				<h6>Want Disqus Comments? </h6> 
			  <span></span>
				</div>
				<div className="box-center">
					<h6>You can enable Disqus comments on the articles if you want by filling the Disqus URL.</h6> 
					
					<button className='bn632-hover bn26'>Set now</button>
				</div>
			</div>

			<div className="box">
				<div className="box-top">
				<h6>Want Facebook Comments? </h6> 
			  <span></span>
				</div>
				<div className="box-center">
					<h6>You can enable Facebook comments on the articles if you want by filling the Facebook App Id. </h6> 
					
					<button className='bn632-hover bn26'>Set now</button>
				</div>
			</div>


		   </div>
			
		</main>
    </section>
  )
}

export default Home