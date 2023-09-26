import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/base/Navbar';
import Landing from './pages/Landing';
import Authentication from './pages/Authentication';
import Explore from './pages/Explore'
import Planner from './pages/Planner';
import Collections from './pages/Collections';
import Map from './pages/Map';
import Discussions from './pages/Discussions';
import PrivateRoutes from './components/PrivateRoutes';
import { messaging } from './config/firebase';
import { getToken } from 'firebase/messaging';
import PanelLayout from './components/admin_panel/PanelLayout';
import AdminLogin from './components/admin_panel/AdminLogin';


function App() {

  async function requestPermission() {
    const permission = await Notification.requestPermission()
    if (permission === 'granted') {
      const token = await getToken(messaging, { vapidKey: 'BO6L1QNjM1ZshA5CvXqEC7XxfIdzGyBZfV6iTQzpL69f3uiT4oIVIbZgCXr5LruMlB76VR-zZscGcH7m_3PbVPM' })
      console.log('Token generated', token)

    } else if (permission === 'denied') {
      console.log('permission denied')
    }
  }

  useEffect(() => {
    requestPermission()
  })

  return (
    <div className='App'>
      <Routes>
        <Route path='/adminLogin' element={<AdminLogin />} />

        <Route path="/admin/*" element={<PanelLayout />}></Route>

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
