import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Containers/Home";
import NothingHere from "../Containers/NothingHere";
import DetailsProduct from "../Containers/DetailsProduct";
import Cart from "../Containers/Cart";
import Search from "../Containers/Search";
import SigIn from "../Containers/SigIn";
import Register from "../Containers/Register";
import Pasarela from "../Containers/Pasarela";
import AdminPage from "../Containers/AdminPage";
import UserProfile from "../Containers/UserProfile";

function App() {
  return (
    <div className="App" style={{padding: 24}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route> 
          <Route path="/datails-products/:id" element={<DetailsProduct />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/sigin" element={<SigIn />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/pasarela" element={<Pasarela />}></Route>
          <Route path="/adminPage" element={<AdminPage />}></Route>
          <Route path="/user-profile" element={<UserProfile />}></Route>
          <Route path="*" element={<NothingHere />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
