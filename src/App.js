import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import IndexPage from './IndexPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DealsComponent from './DealsComponent';
import CreateDeal from './CreateDeal';
import Profile from './Profile';
import Bid from './Bid';


function App() {
  return (
    <div className="App">
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />}>
        <Route path='/deals'  element={<DealsComponent />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
