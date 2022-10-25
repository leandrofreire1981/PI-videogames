import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Index';
import LandingPage from './components/landingPage/Index';
import Nav from './components/nav/Index.jsx';

function App() {
  return (
    <div className="App">
  
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route exact path='/home'>
          <Home/>
        </Route>

    </div>
  );
}

export default App;
