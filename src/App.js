import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';

// Import our pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';


import './App.css';

// The App component is the main scaffold for the entire react application
// This is normal where we would define most if not all the pages of the application.
// You can architect however you want, React is super free with how you should
// layout your project file directories.

// Let's define the basic structure / template of the app

// The Switch component looks for patterns in the URL and tries to match the render with the defined pattern
// Switch components will look for the first match, so the order of your Routes matters
// Or you could use the exact attribute. Each use-case is different, with their own advantages
function App() {
  return (
    <div className="app">
      <div className="mb-3">
        <Header />
      </div>
      <div className="mainContent container-fluid">
        <Switch>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      {/* Footer or something? */}
    </div>
  );
}

export default App;
