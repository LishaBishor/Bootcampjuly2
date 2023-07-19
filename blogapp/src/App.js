import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Addposts from './components/Addposts';
import Viewposts from './components/Viewposts';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/addposts" element={<Main child={<Addposts method="post" data={{title:"",description:"",urlToImage:""}}/>}/>}/>
      <Route path="/viewposts" element={<Main child={<Viewposts/>}/>}/>
      <Route path="/header" element={<Header/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
