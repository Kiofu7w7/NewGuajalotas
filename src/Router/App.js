import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Containers/Home";
import NothingHere from "../Containers/NothingHere";
import DetailsProduct from "../Containers/DetailsProduct";

function App() {
  return (
    <div className="App" style={{padding: 24}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route> 
          <Route path="/datails-products/:id" element={<DetailsProduct />}></Route>
          {/* <Route path="/cart" element={<Cart />}></Route>
          <Route path="/sigin" element={<SigIn />}></Route>
          <Route path="/register" element={<Register />}></Route> */}
          <Route path="*" element={<NothingHere />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
