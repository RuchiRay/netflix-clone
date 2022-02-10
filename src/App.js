import React from "react";
import { HomeScreen } from "./pages/HomeScreen/HomeScreen";
import { LandingPage } from './pages/LandingPage/LandingPage';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { AuthRouter } from './routes/AuthRouter';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/homescreen" element={<HomeScreen />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<AuthRouter><Login/></AuthRouter>} />
          <Route path="/signup" element={<AuthRouter><SignUp/></AuthRouter>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
