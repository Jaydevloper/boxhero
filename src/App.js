import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Inform from "./auth-page/login/inform";
import Login from "./auth-page/login/login";
import Signup from "./auth-page/signup/signup";
import Upform from "./auth-page/signup/upform";
import { Context } from "./context/context";
import Home from "./Home/home";
import Addproduct from "./modules/add-product/components/add-product";
import Add from "./modules/add/components/add";

function App() {
  const {token} = useContext(Context)
  return (
    <>
    <Routes>
      <Route path="/" element={token ? <Home/>:<Signup/>}/>
      <Route path="/signup" element={token ?<Home/> : <Signup/>}/>
      <Route path="/resignup" element={token ?<Home/>: <Upform/>}/>
      <Route path="/login" element={token ?<Home/>: <Login/>}/>
      <Route path="/relogin" element={token ?<Home/>: <Inform/>}/>
      <Route path="/addmore/:id" element={token && <Add/>}/>
      <Route path="/add" element={token && <Addproduct/>}/>
    </Routes>
    </>
  );
}

export default App;
