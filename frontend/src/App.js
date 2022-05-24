import { useContext } from "react";
import UserContext from './Context/context'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";

function App() {
  const data = useContext(UserContext)
  return (
    <>
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </div>
    </Router>    
    </>
    
  );
}

export default App;
