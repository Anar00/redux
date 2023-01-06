import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Customers from "./components/Customers";
import Favourites from "./components/Favourites ";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/customers" element={<Customers/>} />
      <Route path="/favourites" element={<Favourites/>} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;