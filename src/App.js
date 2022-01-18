import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { SearchProvider } from './contexts/searchContext';
import { AuthProvider } from './contexts/AuthContext';
import './App.scss';

// Custom Routes
import PrivateRoute from './components/pages/PrivateRoute';

// Components
import { Nav } from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './components/pages/Home';
import Testing from './components/pages/Testing';
import { LoginSignup } from './components/pages/LoginSignup';
import Results from './components/pages/Results';
import About from './components/pages/About';
import Dashboard from './components/pages/Dashboard';
import ForgotPassword from './components/pages/ForgotPassword';

// Layouts
import ResultsLayout from './components/layouts/results-layout';

export const App = ({ store }) => (
  <div className="App">
    <Provider store={store}>
      <Nav />
      <Switch>
        <AuthProvider>
          <SearchProvider>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/testing" component={Testing} />
            <Route path="/results-layout" component={ResultsLayout} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <Route
              path="/search/term=:term&location=:location"
              component={Results}
            />
            
          </SearchProvider>
          <Route path="/auth/:toggle" component={LoginSignup} />
          {/* <Route exact path="/:toggle" component={LoginSignupComponent} /> */}
        </AuthProvider>
      </Switch>
      <Footer />
    </Provider>
  </div>
);