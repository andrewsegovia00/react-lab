import { useState } from 'react'
import SkillList from './components/Skillset/Skillset'
import NewSkillForm from './components/NewSkillForm/NewSkillForm'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  const skillsArr = [
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ];

  const [skills, setSkills] = useState(skillsArr);


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