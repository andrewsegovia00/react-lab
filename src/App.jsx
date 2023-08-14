// import { useState } from 'react'
import './App.css'
import SkillList from './components/Skillset/Skillset'
import NewSkillForm from './components/NewSkillForm/NewSkillForm'

export default function App() {
  // const [count, setCount] = useState(0)

  const skills = [
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ];

  return (
    <>
    <div className='centerContainer'>
      <h1 className='teal-text'>REACT DEV SKILLS</h1>
      <SkillList skills = {skills} />
      <hr />
      <NewSkillForm />
    </div>
    </>
  )
}