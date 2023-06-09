import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import { BrowserRouter,Routes, Route,} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home name = "Home"/>}  />
        <Route path="/home" element={<Home name = "Home"/>}  />

        <Route path='/products' element={<Products/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
