import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Buy from "./pages/Buy";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
