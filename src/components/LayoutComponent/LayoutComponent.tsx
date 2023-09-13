import React from 'react'
import { HeaderComponent } from "@app/components/HeaderComponent/HeaderComponent";
import { Outlet } from 'react-router-dom';
import { LayoutContainer } from './styles'

interface HeaderComponentProps {
      children?: React.ReactNode;
}
    
export const Layout: React.FC<HeaderComponentProps> = ({ children }) => {
      return (
          <LayoutContainer>
            <HeaderComponent>
                  { children }
            </HeaderComponent>
            <Outlet />
          </LayoutContainer>  
      )
}