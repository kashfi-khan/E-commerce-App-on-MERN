import "./App.css";
import Nav from "./Components/Header/navbar";
import { Routes, Route } from "react-router";
import SignUp from "./Components/SignUp";
import PrivateComponent from "./Components/privateComponent";
import Login from "./Components/Login";
import AddProduct from "./Components/Product/addProduct";
import ProductList from "./Components/Product/productList";
import UpdateProduct from "./Components/Product/updateProduct";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Nav />

      <Routes>  
        <Route element={<PrivateComponent />}>
          <Route path="/" element={<ProductList />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/update/:id" element={<UpdateProduct />} />
          <Route path="/logout" element={<h1>Logout</h1>} />
          <Route path="/profile" element={<h1>Profile</h1>} />
        </Route>

        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
