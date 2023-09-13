import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from '@app/pages/HomePage/HomePage';
import { Login } from '@app/pages/LoginPage/LoginPage';
import { Detail } from '@app/pages/DetailPage/DetailPage';
import { Layout } from '@app/components/LayoutComponent/LayoutComponent';

export const AppRoutes: React.FC = () => {
  return (
      <Routes>
        <Route path="/login" element={ <Login/> } />
        <Route element={ <Layout />}>
          <Route path="/home" index element={ <Home/> } />
          <Route path="/games/:game" element={ <Detail/> } />
        </Route>
        <Route path="/*" element={<Navigate to="/login" replace />} />
      </Routes>
  );
}

export default AppRoutes;
