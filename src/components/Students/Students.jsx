import Student from "../Student/Student";

const Students = () => {
  const studentsList = [
    { name: "Niko", major: "Industrial" },
    { name: "Amin", major: "Electrical" },
    { name: "Hazhar", major: "Computer" },
  ];
  return (
    <div>
      {studentsList.map((student, index) => (
        <Student key={index} student={student} />
      ))}
    </div>
  );
};

export default Students;
