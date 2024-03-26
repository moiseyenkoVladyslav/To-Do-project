import Todo from "./components/todo";
import "./App.css";
import Navbar from "./pages/Navbar";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Career from "./pages/Career";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

//Switch = Routes

function App() {
  const todos = [
    {
      id: 1,
      title: `wash dishes`,
      completed: false,
    },
    {
      id: 2,
      title: `make dinner`,
      completed: true,
    },
  ];

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/career" element={<Career />}></Route>
        </Routes>
      </div>
      {/* <div className="test__data">
        <h1>_dev branch_</h1>
        <h2>Test Data:</h2>
        {todos.map((todo) => {
          return <Todo todo={todo} />;
        })}
      </div> */}
    </Router>
  );
}

export default App;
