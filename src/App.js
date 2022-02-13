import React, { useEffect } from "react";
import { HomeScreen } from "./pages/HomeScreen/HomeScreen";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { AuthRouter } from "./routes/AuthRouter";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { auth } from "./firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('auth state changed');
      if (currentUser) {
        dispatch(login({ uid: currentUser.uid, email: currentUser.email }));
        localStorage.setItem(
          "user",
          JSON.stringify({ uid: currentUser.uid, email: currentUser.email })
        );
      } else {
        dispatch(login(null));
        localStorage.removeItem('user')
      }
    });
    return unsubscribe;
  }, []);
  console.log(user);
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/login"
            element={
              <AuthRouter>
                <Login />
              </AuthRouter>
            }
          />
          <Route
            path="/signup"
            element={
              <AuthRouter>
                <SignUp />
              </AuthRouter>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomeScreen />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
