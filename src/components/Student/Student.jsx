import CustomCard from "../CustomCard/CustomCard";

const Student = (props) => {
  const description = `${props.student.name} is a/an ${props.student.major} engineering student`;
  return (
    <CustomCard
      title={props.student.name}
      onClick={() => {
        console.log(props.student.major);
      }}
    >
      {description}
    </CustomCard>
  );
};

export default Student;
