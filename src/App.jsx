import './App.css';
import PostList from './components/PostList';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/posts" element={<PostList />} /> 
        </Routes>
      </>
    </Router>
  );
}

export default App;
