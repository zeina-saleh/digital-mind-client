import './styles/App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/base/Navbar';
import Landing from './pages/Landing';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Landing />} />
      </Route>
    </Routes>
  );
}

export default App;
