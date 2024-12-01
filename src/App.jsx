import { useEffect, useState, useTransition } from 'react'
import './App.css'
import { BrowserRouter, Form, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Sheets from './pages/sheets/Sheets'
import Loader from './pages/loader/Loader'

import Gallery from './pages/gallery/Gallery'
import Users from './pages/users/Users'
import Engines from './pages/engines/Engines'
import Categories from './pages/categories/Categories'
import Posts from './pages/posts/Posts'
import Create from './pages/create/Create'
import Plugins from './pages/plugins/Plugins'
import Settings from './pages/settings/Settings'
function App() {
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true);
  const [menuBtn , setMenuBtn] = useState(false);
  const [dark , setDark] = useState(false);
  const onDark = () => {
    setDark(!dark);


  }
  const HandleClick = () => {
    setIsLoading(true);
	  setTimeout(() => {
    setIsLoading(false);
	  }, 2000); // Adjust the delay as needed
	};
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);


  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  const handleSubmit = (event) => {
    event.preventDefault();
    if ( username === 'umurzakov@gmail.com' && password === 'admin') {
      setIsLoggedIn(true);
      alert('Вы вошли в аккаунт');
    
     
    }else{
     console.log('Неверное имя или пароль');
     
    }    
    
  };
  
 
  return (
  <>
      <body className='dark'>
   
   </body>
    {isLoggedIn ? (
      <div>
        {isLoading ? <Loader /> : (
       <BrowserRouter>
       <Sidebar menuBtn={menuBtn} setMenuBtn={setMenuBtn} HandleClick={HandleClick}  />
       <Navbar menuBtn={menuBtn} onDark={onDark} setMenuBtn={setMenuBtn} />
      <Routes >
      <Route  path="/" element={<Home menuBtn={menuBtn}  setMenuBtn={setMenuBtn} />} />
      <Route  path='/pages' element={<Sheets menuBtn={menuBtn} setMenuBtn={setMenuBtn} />} />
      <Route path='/loader' element={<Loader  />} />
      <Route path='/gallery' element={<Gallery menuBtn={menuBtn} setMenuBtn={setMenuBtn} />} />
      <Route path='/users' element={<Users menuBtn={menuBtn} setMenuBtn={setMenuBtn} />} />
      <Route path='/engines' element={<Engines menuBtn={menuBtn} setMenuBtn={setMenuBtn} />} />
      <Route path='/categories' element={<Categories menuBtn={menuBtn} setMenuBtn={setMenuBtn} />} />
      <Route path='/posts' element={<Posts menuBtn={menuBtn} setMenuBtn={setMenuBtn} />} />
      <Route path='/create' element={<Create menuBtn={menuBtn} setMenuBtn={setMenuBtn} />} />
      <Route path='/plugins' element={<Plugins menuBtn={menuBtn} setMenuBtn={setMenuBtn} />} />
      <Route path='/settings' element={<Settings menuBtn={menuBtn} setMenuBtn={setMenuBtn} setUsername={setUsername} setPassword={setPassword} />}  />
      </Routes>
      </BrowserRouter>
      )}    
      </div>
    ) : (
      <div className='login'>
      


	<div class="section">
		<div class="container">
			<div class="row full-height justify-content-center">
				<div class="col-12 text-center align-self-center py-5">
					<div class="section pb-5 pt-5 pt-sm-2 text-center">
					
						<div class="card-3d-wrap mx-auto">
							<div class="card-3d-wrapper">
								<div class="card-front">
									<div class="center-wrap">
										<form onChange={handleSubmit} class="section text-center">
											<h4 class="mb-4 pb-3">Log In</h4>
											<div class="form-group">
												<input onInput={(e) => setUsername(e.target.value)} type="email" name="email" class="form-style" placeholder="Your Email" id="logemail" />
                        <i class='input-icon bx bx-at'></i>
											</div>	
											<div class="form-group mt-2">
												<input onInput={(e) => setPassword(e.target.value)} type="password" name="password" class="form-style" placeholder="Your Password" id="logpass" />

                        <i class='input-icon bx bxs-lock-alt'></i>
											</div>
											<button onClick={handleSubmit} class="btn mt-4">submit</button>
                            				<p class="mb-0 mt-4 text-center"><a href="#0" class="link">Forgot your password?</a></p>
				      					</form>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	</div>
		      	</div>
	      	</div>
	    </div>
	</div>
      </div>
      
    )}
  </>
  )
}

export default App
