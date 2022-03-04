const Student = (props) => {
  //   const description = `${props.name} is a/an ${props.major} engineering student`;
  //   return <div>{description}</div>;
  const description = `${props.student.name} is a/an ${props.student.major} engineering student`;
  return <div>{description}</div>;
};

export default Student;
