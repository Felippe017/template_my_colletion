import AppRoutes from '@app/routes'
import { CartProvider } from '@app/context/CartContext';

function App() {
  return (
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  )
}

export default App

