// import "./App.css";
import Nav from './components/Nav';
import Home from './Pages/Home';
import Books from './Pages/Books';
import Footer from './components/Footer';
import BookInfo from './Pages/BookInfo';
import Cart from './Pages/Cart';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { books } from './data'
import React, { useState} from 'react';

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
    }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) => 
        item.id === book.id 
          ? {
              ...item,
              quantity: +quantity,
            }
          : item
        )
    );
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id))
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity;
    });
    return counter;
  }

  function ScrollToTop() {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

  return (
    <Router>
      <div className="App">
        <ScrollToTop /> 
        <Nav numberOfItems={numberOfItems()} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart} cart={cart} />} />
          <Route path="/cart" element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
