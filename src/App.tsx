import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Route, Routes, HashRouter, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
// import BookList from "./Components/BookList";
import BookDetails from "./Components/BookDetails";
import NotFound from "./Components/NotFound";
import { FetchDataProvider } from "./Components/FetchData";
import Footer from "./Components/Footer";
import "./styles/components/styles.css";
function App() {
  return (
    <>
      <HashRouter>
        <FetchDataProvider>
          <Navbar />
          <Routes>
            <Route index element={<Navigate to="home" replace />} />
            <Route path="/home" element={<Header />} />
            <Route path="/books/:bookId" element={<BookDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />{" "}
          </Routes>
          <Footer />
        </FetchDataProvider>
      </HashRouter>
    </>
  );
}

export default App;
