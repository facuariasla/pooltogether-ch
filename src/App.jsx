import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Buy from "./pages/Buy";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Buy />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
