import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar.js';
import Dasbord from './pages/Dashboard.js';
import Users from './pages/User.js';
import About from './pages/About.js';

function App() {
  

  return (
    <>
      <BrowserRouter>
      <div className="flex">
        <Sidebar/>
        <div className="flex-1">
          <Header/>
          <Routes>
            <Route path='/' element={<Dasbord />}/>
            <Route path='/user' element={<Users />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
