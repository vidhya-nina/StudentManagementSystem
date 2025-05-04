import LoginPage from './components/LoginPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './components/Signup'
import StudentList from './components/StudentList';
import Edit from './components/Edit';
import { useState } from 'react';
function App() {
  const [regno, setRegno] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [address, setAddress] = useState("");
  const [CGPA, setCGPA] = useState("");
  const [listOfStudents,setListOfStudents] =useState( [
    {
      regno: 1,
      name: "Vidhya",
      age: "26",
      course: "B.Tech(IT)",
      CGPA: "8.9",
      address: "Chennai",
    },
    {
      regno: 2,
      name: "Balaji",
      age: "29",
      course: "M.B.A",
      address: "Vellore",
      CGPA: "9.2"
    },
    {
      regno: 3,
      name: "Emi nina",
      age: "23",
      course: "M.B.B.S",
      address: "Banglore",
      CGPA: "9.6"
    },
  ]);
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<LoginPage />}/>
    <Route exact path="/register" element={<Signup/>}/>
    <Route exact path="/studentList" element={<StudentList listOfStudents={listOfStudents} setListOfStudents={setListOfStudents} setRegno={setRegno} setName={setName} setCourse={setCourse} setAddress={setAddress} setAge={setAge} setCGPA={setCGPA}/>}/>
    <Route exact path="/edit" element={<Edit listOfStudents={listOfStudents} name={name} regno={regno} address={address} age={age} course={course} CGPA={CGPA} setListOfStudents={setListOfStudents} setRegno={setRegno} setName={setName} setCourse={setCourse} setAddress={setAddress} setAge={setAge} setCGPA={setCGPA}/>}/>
    {/* <Route exact path="/add" element={<Add listOfStudents={listOfStudents} setListOfStudents={setListOfStudents} openPopUp={openPopUp}setOpenPopUp={setOpenPopUp}name={name} regno={regno} address={address} age={age} course={course} CGPA={CGPA} setRegno={setRegno} setName={setName} setCourse={setCourse} setAddress={setAddress} setAge={setAge} setCGPA={setCGPA}/>}/> */}
  </Routes>
  </BrowserRouter>
  </div>  );
}

export default App;
