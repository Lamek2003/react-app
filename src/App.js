import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Users from './pages/User';
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login';
import './App.css';

const LayoutAdmin = () => (
  <ProtectedRoute>
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="m-6 p-10 bg-gray-50 min-h-screen rounded-lg">
          <Outlet />
        </div>
      </div>
    </div>
  </ProtectedRoute>
);

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<LayoutAdmin />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user" element={<Users />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
