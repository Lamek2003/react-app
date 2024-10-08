import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom'; // นำเข้าซ้ำซ้อน สามารถลบได้
import { useAuth } from './AuthProvider';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Users from './pages/User';
import About from './pages/About';
import Register from './pages/Register';
import Account from './pages/Account';
import Login from './pages/Login';
import MyBlog from './pages/MyBlog'; // ตรวจสอบชื่อไฟล์ MyBlog.js
import AddBlog from './pages/AddBlog';
import './App.css';
import EditBlog from './pages/EditBlog';

// Layout สำหรับหน้า Admin
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

// คอมโพเนนต์สำหรับการตรวจสอบการเข้าสู่ระบบ
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // ถ้าไม่มีผู้ใช้เข้าสู่ระบบ ให้นำไปยังหน้าล็อกอิน
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children; // ถ้ามีผู้ใช้ ให้แสดง children
};

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<LayoutAdmin />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user" element={<Users />} />
          <Route path="/about" element={<About />} />
          <Route path="/account" element={<Account />} />
          <Route path="/myblog" element={<MyBlog />} /> {/* ตรวจสอบชื่อไฟล์ MyBlog.js */}
          <Route path="/new-post" element={<AddBlog />} />
          <Route path="/edit-post/:id" element={<EditBlog />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
