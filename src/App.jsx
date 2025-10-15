import Home from "./pages/home";
import Cart from "./pages/cart";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import SideBar from "./components/sideBar";
import Admin from "./pages/admin";
import AddNewPizza from "./components/addNewPizza";
import './scss/app.scss';

function App() {
  return (
    <div className='App'>
      <SideBar />
      <div className='wrapper'>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/admin' element={<Admin />} />
        </Routes>
        <Routes>
          <Route exact path='/admin/add-pizza' element={<AddNewPizza />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;