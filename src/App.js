import './App.css';
import Business from './Components/Business';
import Header from './Components/Header';
import World from './Components/World';
import Main from './Components/Main';
import Entertainment from './Components/Entertainment';
import Sports from './Components/Sports';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header title="NS News" />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/world" element={<World />} />
          <Route path="/business" element={<Business />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/sports" element={<Sports />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
