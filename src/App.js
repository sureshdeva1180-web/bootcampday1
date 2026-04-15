import { useState } from "react";
import StudentCard from "./StudentCard";

function App() {
  // Exercise 3 → State
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  // Exercise 4 → Event handling
  const handleClick = () => {
    console.log("Name:", name);
    console.log("Course:", course);
  };

  return (
    <div>
      <h1>Student Form</h1>

      {/* Exercise 5 → Form UI */}
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Enter Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <br /><br />

      <button onClick={handleClick}>Submit</button>

      {/* Show StudentCard */}
      <StudentCard
        name={name}
        course={course}
        status="Active"
      />
    </div>
  );
}

export default App;