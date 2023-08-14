import './SkillsetItem.css'

export default function SkillListItem({ skill }) {
    const { name: skillName, level: skillLvl } = skill;
    return (
      <li className='SkillListItem'>
        {skillName} <span className='level'> Level: {skillLvl}</span>
      </li>
    );
  }
  