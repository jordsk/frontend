import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';
import './App.css';
import SearchableList from './SearchableList';
import Home from './Home';
import Navigation from './Navigation';
import ParamsExample from './ParamsExample';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <h1>Joogle</h1>
        </header>
        <nav>
          <Link to="/home">
            <button type="button">Home</button>
          </Link>
          <Link to="/liftingState">
            <button type="button">Lifting State</button>
          </Link>
          <Link to="/state">
            <button type="button">State</button>
          </Link>
          <Navigation />
        </nav>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/liftingState" element={<SearchableList />} />
          <Route path="/params/:colour" element={<ParamsExample />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
