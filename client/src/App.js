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
      <>
      <TopBar />
      <Projects_Page />
      </>
  );
}
export default App;
