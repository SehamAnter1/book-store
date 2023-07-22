import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import BookList from "./Components/BookList";
import BookDetails from "./Components/BookDetails";
import NotFound from "./Components/NotFound"; 
import { FetchDataProvider } from "./Components/FetchData";
import Footer from "./Components/Footer";
import './styles/components/styles.css'
function App() {
  return (
    <>
      <Router>
        <FetchDataProvider>
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <BookList />
                </>
              }
            />
            <Route path="/books/:bookId" element={<BookDetails />} />
            <Route path="*" element={<NotFound />} />{" "}
            <Route path="/about" element={<About />}/>
          </Routes>
          <Footer/>
        </FetchDataProvider>
      </Router>
    </>
  );
}

export default App;
