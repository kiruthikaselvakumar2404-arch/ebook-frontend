import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Poems from "./Poem";
import PoemDetail from "./PoemDetail";
import Contact from "./Contact";
import Vazhthurai from "./Vazhthurai";
import Anindhurai from "./Anindhurai";
import Ennurai from "./Ennurai";
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/poems" element={<Poems />} />
        <Route path="/poem/:id" element={<PoemDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vazhthurai" element={<Vazhthurai />} />
        <Route path="/anindhurai" element={<Anindhurai />} />
        <Route path="/ennurai" element={<Ennurai />} />
        
      </Routes>
    </Router>
  );
}

export default App;