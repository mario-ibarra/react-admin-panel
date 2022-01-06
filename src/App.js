import React, { Component } from 'react';
import './app.css'
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productsList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';


class App extends Component {
    render() {
        return(
            <Router>
            <Topbar />
            <div className="container">
             <Sidebar />
             <Switch>
                 <Route exact path="/">
                    <Home />
                 </Route>
                 <Route exact path="/users">
                    <UserList />
                 </Route>
                 <Route exact path="/user/:userId">
                    <User />
                 </Route>
                 <Route exact path="/newUser">
                    <NewUser />
                 </Route>
                 <Route exact path="/products">
                    <ProductList />
                 </Route>
                 <Route exact path="/product/:productId">
                    <Product />
                 </Route>
                 <Route exact path="/newproduct">
                    <NewProduct />
                 </Route>
             </Switch>
            </div>
       
            </Router>
        )
    }
};

export default App;

