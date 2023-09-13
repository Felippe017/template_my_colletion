import React, { createContext, useState, useContext } from 'react';

// Defina um tipo para os itens do carrinho
interface CartItem {
  id: number | undefined;
  name: string | undefined;
  price: number | undefined;
}

// Defina um tipo para o contexto
export interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
}

interface CartContextProps {
  children?: React.ReactNode;
}

// Crie o contexto
const CartContext = createContext<CartContextType | undefined>(undefined);

// Crie um componente de provedor para o contexto
export const CartProvider: React.FC<CartContextProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId: number) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Função de utilidade para acessar o contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  }
  return context;
};
