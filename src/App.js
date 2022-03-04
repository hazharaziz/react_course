import "./App.css";
import Student from "./components/Student/Student";

// JSX : JavaScript XML
const App = () => {
  const students = [
    { name: "Niko", major: "Industrial" },
    { name: "Amin", major: "Electrical" },
    { name: "Hazhar", major: "Computer" },
  ];
  return (
    <div className="App">
      {/* <Student name={students[0].name} major={students[0].major} />
      <Student name={students[1].name} major={students[1].major} />
      <Student name={students[2].name} major={students[2].major} /> */}
      {students.map((student) => (
        <Student student={student} />
      ))}
    </div>
  );
};

export default App;
