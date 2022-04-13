
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import CheckOut from './Components/CheckOut/CheckOut';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/checkout" element={<RequireAuth><CheckOut></CheckOut></RequireAuth>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/reviews" element={<Reviews></Reviews>}></Route>
    </Routes>
    </div>
  );
}

export default App;
