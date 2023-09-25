import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/base/Navbar';
import Landing from './pages/Landing';
import Authentication from './pages/Authentication';
import Explore from './pages/Explore'
import Planner from './pages/Planner';
import Collections from './pages/Collections';
import Map from './pages/Map';
import Discussions from './pages/Discussions';
import PrivateRoutes from './components/PrivateRoutes';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/login' element={<Authentication />}></Route>

        <Route path='/home' element={
          <PrivateRoutes>
            <Navbar />
          </PrivateRoutes>}>
          <Route index element={<Explore />} />
          <Route path='/home/planner' element={<Planner />} />
          <Route path='/home/collections' element={<Collections />} />
          <Route path='/home/discussions' element={<Discussions />} />
          <Route path='/home/collections/idea/:ideaId?' element={<Map />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
