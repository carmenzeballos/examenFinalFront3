import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import { Favs } from "./routes/Favs";
import { Contact } from "./routes/Contact";
import { Navbar } from "./components/Navbar";
import { Detail } from "./routes/Detail";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/details/:id" element={<Detail />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
