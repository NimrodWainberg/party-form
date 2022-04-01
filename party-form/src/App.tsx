import React, {useState} from 'react';
import './App.css';

  interface IState {
    people: {
      name: string;
      age: number;
      url: string;
      note?: string;
    }[]
  }

function App() {

  const [people, setPeople] = useState<IState["people"]>([
  // {
  //   name: "Harry potter",
  //   url: "",
  //   age: 40,
  //   note: "Magician"
  // },
  // {
  //   name: "Ron Weasley",
  //   url: "",
  //   age: 42,
  // }
])

 
  return (
    <div className="App">
      <h1>Party List</h1>
    </div>
  );
}

export default App;
