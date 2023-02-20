import { Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import {
  Home,
  Create,
  Login,
  Register,
  Type,
  TypeDetail,
  Update,
} from "./Pages";

function App() {
  return (
    <div className="bg-gray-100">
      <>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/*" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update" element={<Update />} />

          <Route path="/types/:type" element={<Type />} />
          <Route path="/typeDetail/:id" element={<TypeDetail />} />
        </Routes>
        <Footer />
      </>
    </div>
  );
}

export default App;
