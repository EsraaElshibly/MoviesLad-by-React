import React, { useState } from 'react';
import Navbar from './Components/NavBar/nav';
import Moviees from './Components/Movies/movies';
import MovieeDetails from './Components/Movies/MoveieDetails';
import Favourite from './Components/Movies/favourites';
import { Route , Switch , BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Home';
import './App.css';
import { LanguageProvider } from './Components/Context/languageContext';

function App() {

  const [lang , setLang] = useState("en")

  return (
      <>
        <Router>
        <LanguageProvider value={{lang , setLang}}>
          <Navbar />
        </LanguageProvider>
        <Switch>
          <Route path = "/" exact component={Home} />
          <Route path = "/Movies" exact component={Moviees} />
          <Route path = "/moveieDetails/:id" exact component={MovieeDetails} />
          <Route path = "/Favourite" exact component={Favourite} />
        </Switch>
      </Router>
      </>
      // <>
      // <Home />
      // <Moviees />
      // </>

  );
}

export default App;
