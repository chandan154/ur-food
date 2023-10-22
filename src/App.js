import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login  from './screen/Login';
import './App.css';
import Home from './screen/Home';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>} />  
          <Route exact path="/login" element={<Login/>} />
        </Routes>   
      </div>
    </Router>
  );
}

export default App;
