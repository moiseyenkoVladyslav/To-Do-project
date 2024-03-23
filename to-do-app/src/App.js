import Todo from "./components/todo";
import "./App.css";

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
    <div className="App">
      <h1>dev branch</h1>
      {todos.map((todo) => {
        return <Todo todo={todo} />;
      })}
    </div>
  );
}

export default App;
