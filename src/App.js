import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import IndexPage from './IndexPage';
import { BrowserRouter ,Route,Routes, Switch } from 'react-router-dom';
import DealsComponent from './DealsComponent';
import CreateDeal from './CreateDeal';
import Profile from './Profile';
import Bid from './Bid';


function App() {
  return (
    <div className="App">
      {/* <Router>
        <Switch>
          <Route exact path="/">
            <IndexPage />
          </Route>
          <Route exact path="/deals">
            <DealsComponent />
          </Route>
          <Route exact path="/create-deal">
            <CreateDeal></CreateDeal>
          </Route>
          <Route exact path="/profile">
            <Profile></Profile>
          </Route>
          <Route exact path="/bid">
            <Bid></Bid>
          </Route>
        </Switch>
      </Router> */}

<BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage/>}>
          <Route path="deals" element={<DealsComponent />} />  
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
