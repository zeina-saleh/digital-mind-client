import './styles/App.css';
import { Routes, Route, Outlet, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar0 from './components/base/Navbar0';
import Navbar from './components/base/Navbar';
import Landing from './pages/Landing';
import Authentication from './pages/Authentication';
import Explore from './pages/Explore'
import Planner from './pages/Planner';
import Collections from './pages/Collections';
import Map from './pages/Map';

function App() {

  const navigate = useNavigate()
  const location = useLocation()
  const [isLogged, setIsLogged] = useState(false)

  // useEffect(() => {
  //   const token = localStorage.getItem('access_token');
  //   if (!isLogged) navigate('/login')
  // }, [location.pathname]);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Landing isLogged={isLogged} />}></Route>
        <Route path='/login' element={<Authentication setIsLogged={setIsLogged}/>}></Route>
        <Route path='/home' element={isLogged? <Navbar /> : <Authentication />}>
          <Route index element={<Explore />} />
          <Route path='/home/planner' element={<Planner />} />
          <Route path='/home/collections' element={<Collections />} />
          <Route path='/home/collections/idea/:ideaId?' element={<Map />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
