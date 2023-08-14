import React, { useState } from 'react';
import './NewSkillForm.css';

export default function NewSkillForm({ addSkill }) {
  const initialSkillState = {
    name: '',
    level: 3,
  };

  const [skillData, setSkillData] = useState(initialSkillState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSkillData({
      ...skillData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSkill(skillData);
    setSkillData(initialSkillState);
  };

  return (
    <>
      <form className='NewSkillForm' onSubmit={handleSubmit}>
        <label>Skill</label>
        <input
          type='text'
          name='name'
          value={skillData.name}
          onChange={handleInputChange}
        />
        <label>Level</label>
        <select
          name='level'
          value={skillData.level}
          onChange={handleInputChange}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button type='submit'>ADD SKILL</button>
      </form>
    </>
  );
}
