import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />}></Route>
        <Route path="contact" element={<div>Contact</div>}></Route>
        <Route path="products" element={<div>products</div>}></Route>
        <Route path="detail/:id" element={<ItemDetailContainer />}></Route>
        <Route
          path="category/:categoryName"
          element={<ItemListContainer />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
