import "./Person.css";

const Person = () => {
  const persons = ["Hazhar", "Amin", "Sina", "Niko", "Sara"];

  return (
    <div className="Person-Container">
      <div>
        <h2>Name</h2>
        {persons.map((value) => (
          <p>{value}</p>
        ))}
      </div>
    </div>
  );
};

export default Person;
