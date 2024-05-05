import { BrowserRouter, Routes, Route } from "react-router-dom";
import Songs from "./pages/Songs";
import Add from "./pages/Add";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Songs/>}/>
          <Route path="/add" element={<Add/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
