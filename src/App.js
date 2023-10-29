import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductList from "./components/ProductList";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/product" element={<ProductList/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
