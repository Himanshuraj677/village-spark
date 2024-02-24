import { Route, Routes, Navigate } from "react-router-dom";
import Nav from "./component/page/Nav";
import Home from "./component/page/Home";
import Login from "./component/page/Login";
import Signup from "./component/page/Signup";
import app from "./Firebase";
import { getAuth } from "firebase/auth";
import { useEffect, useState, createContext } from "react";
import JobPage from "./component/page/jobPage";
import Chat from "./component/page/chat";
import JobForm from "./component/page/post";
import Donation from "./component/page/donation";
import Farming from "./component/page/Farming";
import Features from "./component/page/Business";
import Business from "./component/page/BusinessRecommendation";
import "./style/Nav.css";
import Job from "./component/page/Job";
import PageNotFound from "./component/page/PageNotFound";
import LoadingPage from "./component/page/LoadingPage";
import SearchProducts from "./component/page/SearchProducts";
import Dashboard from "./component/page/Dashboard";
import CropRecommendation from "./component/page/CropRecommendation";
import PredictDisease from "./component/page/PredictDisease";
import FarmingPage from "./component/page/FarmingPage";

const checkAuth = createContext();
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const auth = getAuth();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setLoading(false);
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
  }, [auth]);

  if (loading) {
    return <LoadingPage />;
  } else {
    return (
      <>
        <checkAuth.Provider value={isAuthenticated}>
          <Nav />
          {isAuthenticated ? (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Navigate to="/" />} />;
              <Route path="/business/chat" element={<Chat />} />
              <Route path="/job/chat" element={<Chat />} />
              <Route path="/business/post" element={<JobForm />} />
              <Route path="/job" element={<JobPage />} />
              <Route path="/job/search" element={<Job />} />
              <Route path="/donation" element={<Donation />} />
              <Route path="/farming/marketplace" element={<Farming />} />
              <Route path="/business" element={<Features />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/farming" element={<FarmingPage />} />
              <Route path="/farming/crop-recommendation" element={<CropRecommendation />} />
              <Route path="/farming/crop-doctor" element={<PredictDisease />} />
              <Route path="/*" element={<PageNotFound />} />
              <Route path="/register" element={<Navigate to="/" />} />
              <Route path="/business/recommendation" element={<Business />} />
              <Route path="/login" element={<Navigate to="/" />} />
              <Route path="/searchProducts/:category" element={<SearchProducts />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/register" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/*" element={<Navigate to="/login" />} />
            </Routes>
          )}
        </checkAuth.Provider>
      </>
    );
  }
};

export default App;
export { checkAuth };
