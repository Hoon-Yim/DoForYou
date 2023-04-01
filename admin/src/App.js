import './App.css';
//import View from './components/View'
import Login from './components/Login'
//import Update from './components/Update'
//import ViewEmployee from './components/ViewEmployee';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="main">
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </Router>
    </div>
  </div>
   
  );
}

export default App;