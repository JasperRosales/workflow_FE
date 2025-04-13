import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from './authentication/LoginPage'
import RegistrationPage from './authentication/RegistrationPage';
import UserService from './service/UserService';


function App() {
  const isAdmin = UserService.adminOnly();

  return (
    <BrowserRouter>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            {isAdmin && (
              <>
                  
              </>
            )}

            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;