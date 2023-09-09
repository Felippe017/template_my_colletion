import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from '@app/pages/HomePage/HomePage';
import { Login } from '@app/pages/LoginPage/LoginPage';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default AppRoutes;