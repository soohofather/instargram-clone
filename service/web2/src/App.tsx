// React modules
import { Route, BrowserRouter, Routes } from 'react-router-dom';

// Pages

import NotFound from './pages/NotFound';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Password from './pages/Password';
import User from './pages/User';
import Profile from './pages/Profile';
import Lab from './pages/Lab';
import Home from './pages/home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signup/" element={<Signup/>}></Route>
        <Route path="/signin/" element={<Signin/>}></Route>
        <Route path="/password/" element={<Password/>}></Route>
        <Route path="/home/" element={<Home/>}></Route>
        <Route path="/user/" element={<User/>}></Route>
        <Route path="/profile/" element={<Profile/>}></Route>
        <Route path="/lab/" element={<Lab/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
