import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Works from "./pages/Works";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/works" element={<Works/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
