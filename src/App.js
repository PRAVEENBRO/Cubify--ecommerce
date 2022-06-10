import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Login from './components/Login';
import Homepage from './components/home/Homepage';
import Registration from './components/Registration';
import Contests from './components/Contests';
import AddCart from './components/AddCart';
import searchNotfound from './components/home/searchNotfound';
import Footer from './components/Footer';
import ProductInfo from './components/productpage/ProductInfo';
import Uploadpage from './components/productpage/Uploadpage';
import ScrollArrow from './components/Pageup';




function App() {

  return (
    <div className='body'>
      <BrowserRouter>
        <div className='mt-0'><NavigationBar /></div>

        <Switch>
          <Route exact path='/NavigationBar/Homepage' component={Homepage} />
          <Route exact path='/NavigationBar/Contests' component={Contests} />
          <Route exact path='/NavigationBar/Login' component={Login} />
          <Route exact path='/NavigationBar/AddCart' component={AddCart} />
          <Route exact path='NavigationBar/Registration' component={Registration} />
          <Route  path='/NavigationBar/ProductInfo' component={ProductInfo} />
          <Route  path='/NavigationBar/Uploadpage' component={Uploadpage} />
          <Route component={searchNotfound} />
        </Switch>
        <ScrollArrow/>
      </BrowserRouter>
      {/* <ProductInfo /> */}
      <Footer />
    </div>

  );
}

export default App;
