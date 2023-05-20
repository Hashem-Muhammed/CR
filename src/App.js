import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { MyNav } from './Components/MyNav';
import { Home } from './Components/Home';
import { NotFound } from './Components/NotFound';
import { Products } from './Components/Products';
import { ProductForm } from './Components/ProductForm';
import { ProductDetails } from './Components/ProductDetails';

function App() {
  return (
    <div>
      <MyNav/>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="product/:id/edit" element={<ProductForm/>}/>
        <Route path="product/:id" element={<ProductDetails/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
