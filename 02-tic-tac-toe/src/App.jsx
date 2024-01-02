import { useState } from 'react';


function App() {
  const [Person, setPerson] = useState({name: "John", age: 25, address: "New York"});

  const handleIncreaseAge = () => {
    const newPerson = {...Person, age:Person.age +1};
    setPerson(newPerson);
  }

  return (
    <div>
      <button onClick={handleIncreaseAge}> Add Age </button>
      <h1>{Person.age}</h1>
    </div>
  )
  
}

export default App;