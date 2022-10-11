import React from 'react';
// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Header from './components/Header';
import { Home } from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Signup from './components/Signup';
import MyRatings from './components/MyRatings';
// Styles
import { GlobalStyle } from './GlobalStyle';
// Hooks
import useAuthListener from './hooks/useAuthListener';

const App = () => {
  const { user } = useAuthListener();
  return (
    <Router>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/myratings' element={<MyRatings/>} />
        <Route path="/:movieId" element={<Movie user={user} />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;
