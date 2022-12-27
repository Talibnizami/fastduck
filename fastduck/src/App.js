import "./App.css";
import Sidebar from "./components/Sidebar";
import Addcustomer from "./components/Addcustomer";
import Showcustomer from "./components/Showcustomer";
import Addlocation from "./components/Addlocation";
import Set from "./components/Set";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import History from "./components/History";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route
            path="addLocation"
            element={
              <div className="main">
                <Sidebar />
                <div className="homecontent">
                  <Addlocation />
                </div>
              </div>
            }
          />
           <Route
            path="set"
            element={
              <div className="main">
                <Sidebar />
                <div className="homecontent">
                  <Set/>
                </div>
              </div>
            }
          />
          <Route
            path="history"
            element={
              <div className="main">
                <Sidebar />
                <div className="homecontent">
                  <History/>
                </div>
              </div>
            }
          />
          <Route
          path="addcustomer"
          element={
            <div className="main">
              <Sidebar />
              <div className="homecontent">
                <Addcustomer />
              </div>
            </div>
          }
        ></Route>
          <Route
            path="showcustomer"
            element={
              <div className="main">
                <Sidebar />
                <div className="homecontent">
                  <Showcustomer/>
                </div>
              </div>
            }
          />
        <Route
          path="/"
          element={
            <div className="main">
              <div className="homecontent">
                <Login/>
              </div>
            </div>
          }
        >
          
          <Route
            path="*"
            element={
              <div className="main">
                <div className="homecontent">
                  <Login />
                </div>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>

   
    
  );
}

export default App;
