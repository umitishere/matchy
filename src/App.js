import { useState } from 'react';

import Form from "./components/Form.js";
import MatchPeople from './components/MatchPeople.js';

function App() {

  const [names, setNames] = useState([]);
  const [groupSize, setGroupSize] = useState();

  const handleFormSubmit = (submittedName, submittedGroupSize) => {
    setNames((prevState) => ([
      ...prevState, submittedName
    ]))

    setGroupSize(submittedGroupSize);
  }

  return (
    <main>
      <Form onSubmit={handleFormSubmit} />
      {
        names.map((name) => <li key={Math.random() * 100}>{name}</li>)
      }
      <MatchPeople people={names} groupSize={groupSize} />
    </main>
  );
}

export default App;
