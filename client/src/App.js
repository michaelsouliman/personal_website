import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Projects_Page from "./pages/projects_page/Projects_Page";
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useContext } from "react";

function App() {
  return (
      <Router>
        <TopBar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects_Page />}/>
        </Routes>
      </Router>
  );
}
export default App;
