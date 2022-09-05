import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Details from './components/Details';
import Update from './components/Update';
import Create from './components/Create';
import Status from './components/Status';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Errors from './components/Errors';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"> 
          <Home /> {/* --- the home page to display all the pets --- */}
        </Route>
        <Route exact path="/pets/new"> 
          <Create /> {/* --- the form page (for creatind new pet) so the users can submit their favorite pets --- */}
        </Route>
        <Route exact path="/pets/edit/:id"> 
          <Update /> {/*--- the form page (for updateing the pet) so the users can submit their favorite pets ---*/}
        </Route>
        <Route exact path="/error"> 
          <Errors /> {/* --- the error page --- */}
        </Route>
        <Route exact path="/pets/:id"> 
          <Details />  {/* --- the details of one pet --- */}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
