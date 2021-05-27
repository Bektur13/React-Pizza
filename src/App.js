import React from 'react';
import Header from './components/header';
import Home from './pages/home';
import Cart from './pages/cart';
import './scss/app.scss';
import { Route, Switch } from 'react-router-dom';
import SideBar from './components/sideBar';
import Admin from './pages/admin';
import AddNewPizza from './components/addNewPizza';

function App() {
  return (
    <div className='App'>
      <SideBar />
      <div className='wrapper'>
        {/* <Header /> */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/admin' component={Admin} />
        </Switch>
        <Switch>
          <Route exact path='/admin/add-pizza' component={AddNewPizza} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
