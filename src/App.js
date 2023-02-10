import './App.css';
import Home from './Component/Home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from './Component/NotFound/NotFound';
import CountryDetail from './Component/CountryDetail/CountryDetail';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/name/:countryName" element={<CountryDetail/>} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
