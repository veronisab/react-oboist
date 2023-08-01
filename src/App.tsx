import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { About } from "./About";
import { Listen } from "./Listen";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { Navigation } from "./Navigation";
export default function App() {
  return (
    <div className="app">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/listen" element={<Listen />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}
