import './App.css'
import Course from './Course'
import { useState } from 'react'
function App() {
  function getRandomCourse(){
    const courseArray = ["Angular" , "Boostrap" , "Ccsharp" , "KompleWeb"];
    return courseArray[Math.floor(Math.random() * courseArray.length)];
  }
  const [course, setCourse] = useState([])
  function handleClick(){
    setCourse([...course , getRandomCourse()])
  }
  const courseList = course.map((array , index) => {
    return <Course courseName={array} key={index}></Course>
  });
  return (
    <div className='App'>
      <button className='appButton' onClick={handleClick}>Kurs Ekle</button>
      <div className='coutseList'>{courseList}</div>
    </div>
  )
}

export default App
