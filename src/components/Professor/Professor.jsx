import CustomCard from "../CustomCard/CustomCard";

const Professor = (props) => {
  const description = `${props.professor.name} teaches ${props.professor.course}`;

  return <CustomCard title={props.professor.name}>{description}</CustomCard>;
};

export default Professor;
