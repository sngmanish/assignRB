import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Details/:id" element={Details}/>
      </Routes>
    </Router>
  );
}

export default App;
