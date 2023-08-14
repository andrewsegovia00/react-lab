import SkillListItem from "../SkillsetItem/SkillsetItem";
// import './Skillset.css'

export default function SkillList({ skills }) {
  return (
    <>
      <ul>
        {skills.map((skill, index) => (
          <SkillListItem key={index} skill={skill} />
        ))}
      </ul>
    </>
  );
}

