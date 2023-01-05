import { Product } from './pages/Product';
import Home from './pages/Home';
import { ProductList } from './pages/ProductList';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Cart } from './pages/Cart';
import { Navigate, Route, Routes } from 'react-router';

const App = () => {
  let user = true;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={user ? <Navigate replace to={'/'} /> : <Login />} />
      <Route path="/register" element={user ? <Navigate replace to={'/'} /> : <Register />} />
    </Routes>
  );
};

export default App;
