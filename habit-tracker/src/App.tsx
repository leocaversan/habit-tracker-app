
import { Route, BrowserRouter as Router, Routes }from 'react-router-dom';
import Init from './Pages/Init';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Init />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
