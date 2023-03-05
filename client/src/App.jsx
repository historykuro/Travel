import { Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "flowbite";
import "tw-elements";

import {
  Home,
  Create,
  Login,
  Register,
  Type,
  TypeDetail,
  ListPlaces,
  Profile,
} from "./Pages";

function App() {
  return (
    <div className="bg-gray-100">
      <>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/*" element={<Home />} />
          <Route path="/create" element={<Create />} />

          <Route path="/types/:type" element={<Type />} />
          <Route path="/typeDetail/:id" element={<TypeDetail />} />
          <Route path="/list" element={<ListPlaces />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
