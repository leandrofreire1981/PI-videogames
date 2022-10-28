import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import './App.css';
import CreateVideogame from './components/createVideogame';
import GameDetail from './components/gameDetail/Index';
import Home from './components/home/Index';
import LandingPage from './components/landingPage/Index';
import Nav from './components/nav/Index.jsx';
import { getGenres } from './redux/actions';


function App() {

  const dispatch = useDispatch()

  dispatch(getGenres())

  return (
    <div className="App">
  
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route exact path='/home'>
          <Nav/>
          <Home/>
        </Route>
        <Route exact path='/videogames/:id'>
          <Nav />
          <GameDetail />
        </Route>
        <Route exact path='/createGame'>
          <Nav />
          <CreateVideogame />
        </Route>
    </div>
  );
}

export default App;
