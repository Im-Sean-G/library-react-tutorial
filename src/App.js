// import "./App.css";
import Nav from './components/Nav';
import Home from './Pages/Home';
import Books from './Pages/Books';
import Footer from './components/Footer';
import BookInfo from './Pages/BookInfo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { books } from './data'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books books={books} />} />
            <Route path="/books/1" element={<BookInfo books={books} />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
