import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Poems from "./pages/Poem";
import PoemDetail from "./pages/PoemDetail";
import Contact from "./pages/Contact";
import Vazhthurai from "./pages/Vazhthurai";
import Anindhurai from "./pages/Anindhurai";
import Ennurai from "./pages/Ennurai";
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