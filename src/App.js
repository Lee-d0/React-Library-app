import Nav from "./componets/Nav.jsx"

import Footer from "./componets/Footer.jsx";
import { BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import {books} from "./data"
import BookInfo from "./pages/BookInfo.jsx";
import Cart from "./pages/Cart.jsx";
import React , { useEffect, useState } from "react";
function App() {
  const [cart, setCart] = useState([])
  function addToCart(book){
    setCart([...cart, book])
  }

  useEffect(() =>{
    console.log(cart)
  },[cart])

  return (
    <Router>
      <div className="App">
        
        <Nav />
        <Route exact path="/"  component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />}/>
        <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart} cart={cart}/>}/>
        <Route path="/cart" render={() => <Cart books={books}/> }/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
