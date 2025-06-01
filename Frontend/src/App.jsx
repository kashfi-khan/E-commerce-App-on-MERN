import "./App.css";
import Nav from "./Components/Header/navbar";
import { Routes, Route } from "react-router";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Nav />

      <Routes>
        <Route
          path="/"
          element={
            <div className="text-[50px] text-center font-bold">
              helllo world
            </div>
          }
        />
        <Route path="/add" element={<h1>Add Product</h1>} />
        <Route path="/update" element={<h1>Update Product</h1>} />
        <Route path="/logout" element={<h1>Logout</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
         <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
