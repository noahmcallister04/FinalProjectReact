import { BrowserRouter, Routes, Route } from "react-router-dom";
import Songs from "./pages/Songs";
import Add from "./pages/Add";
import Update from "./pages/Update";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Songs/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/update' element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
