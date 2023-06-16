import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AddVideo from './Components/AddVideo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<AddVideo />} path='/addVideo' />
          <Route element={ <PageNotFound/>} path='*'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
