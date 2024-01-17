import { Route, Routes } from "react-router-dom";
import Nav from "./component/page/Nav";
import Home from "./component/page/Home";
import Login from "./component/page/Login";
import Signup from "./component/page/Signup";
import app from "./Firebase";
import { getAuth } from "firebase/auth";
import { useEffect, useState} from "react";
import Job from "./component/page/job";
import Chat from "./component/page/chat";
import JobForm from "./component/page/post";
import Donation from "./component/page/donation";
import Farming from "./component/page/Farming";
import Business from "./component/page/Business";
import "./style/Nav.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDetail, setUserDetail]= useState({
    name: "",
    email: ""
  });

  const auth= getAuth();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
        console.log("Logged in");
        setUserDetail((prevData) => ({
          ...prevData,
          name: user.displayName,
          email: user.email,
        }));
      }
      else {
        setIsAuthenticated(false);
        console.log("You have been logged out");
      }
    })
  }, [auth]);

  useEffect(() => {
    if (userDetail && userDetail.name) {
      console.log(`User displayName: ${userDetail.name}\nuser emailid:${userDetail.email}`);
    }
  }, [userDetail.name, userDetail]);

  return (
    <>
      <Nav isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/job" element={<Job />}/>
        <Route path="/chat" element={<Chat />} />
        <Route path="/post" element={<JobForm />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/farming" element={<Farming />} />
        <Route path="/business" element={<Business />} />
      </Routes>
    </>
  );
}

export default App;