function StudentCard(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Course: {props.course}</p>
      <p>Status: {props.status}</p>
    </div>
  );
}

export default StudentCard;