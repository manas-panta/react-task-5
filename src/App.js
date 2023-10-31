import {useState} from 'react';
import './App.css';

function App() {
  const [age,setAge] = useState('');
  const [ageDisplay, setAgeDisplay] = useState('--')
  function calculate(){
    const date = new Date();
    const todayYear = date.getFullYear();
    const inputAgeYear = age.slice(0,4);
    if(age !== '')
      setAgeDisplay(todayYear-inputAgeYear);
  }
  return (
    <>
      <div className="container">
        <div className="content">
          <h1>Age Calculator</h1>
          <div className="calculator">
            <h3>Enter your date of birth</h3>
            <input type="date" name="age" id="age" onChange={(e) => {setAge(e.target.value)}} />
            <button onClick={calculate} >Calculate Age</button>
          </div>
          <h2>You are {ageDisplay} years old</h2>
        </div>
      </div>
    </>
  );
}

export default App;