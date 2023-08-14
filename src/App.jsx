// import { useState } from 'react'
import './App.css'
import SkillList from './components/Skillset'
import NewSkillForm from './components/NewSkillForm'

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className='centerContainer'>
      <h1>REACT DEV SKILLs</h1>
      <SkillList />
      <hr />
      <NewSkillForm />
    </div>
    </>
  )
}