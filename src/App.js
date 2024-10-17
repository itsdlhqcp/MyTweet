import React from 'react';
import './styles/main.scss';
import 'rsuite/dist/rsuite.min.css';
import { Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route path='/signin' element={<SignIn />} />
      <Route 
        path='/' 
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } 
      />
    </Routes>
  );
}

export default App;
