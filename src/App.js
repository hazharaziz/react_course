import "./App.css";
import Person from "./components/Person/Person";

// JSX : JavaScript XML
const App = () => {
  return (
    <div className="App">
      <div>Header</div>
      <p>Test Paragraph</p>
      <h1>Title</h1>
      <Person />
      <div>Footer</div>
    </div>
  );
};

export default App;
