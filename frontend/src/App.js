import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import StudentHome from './components/StudentHome';
import StudentAptitude from './components/StudentAptitude';
import StudentPlacement from './components/StudentPlacement';
import StudentPortal from './components/StudentPortal';
import AdminHome from './components/AdminHome';
import AdminAptitudeQuestions from './components/AdminAptitudeQuestions';
// import AdminMarksDashboard from './components/AdminMarksDashboard';
// import AdminPortal from './components/AdminPortal';
import SuccessStories from './components/Successstory';
import NavBar from './components/NavBar';
import AdminPortal from './components/AdminPortal';
import AdminDashboard from './components/AdminDashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<><NavBar /><Home /></>} />
          <Route path="/login" element={<><NavBar /><Login /></>} />
          <Route path="/register" element={<><NavBar /><Register /></>} />
          <Route path="/student/home" element={<StudentHome />} />
          <Route path="/student/aptitude" element={<StudentAptitude />} />
          <Route path="/student/placement" element={<StudentPlacement />} />
          <Route path="/student/portal" element={<StudentPortal />} />
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/admin/aptitude-questions" element={<AdminAptitudeQuestions />} />
          {/* <Route path="/admin/marks-dashboard" element={<AdminMarksDashboard />} /> */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/portal" element={<AdminPortal />} />


          <Route path="/succes" element={<SuccessStories />} />

          {/* <Route path="/admin/portal" element={<AdminPortal />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
