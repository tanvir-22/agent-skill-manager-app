import React from "react";
import { getSkills, Skills, skills } from "../Skills";
type Params = {
  params: Promise<{
    identifier: string;
  }>;
};
const Detailspage = async ({ params }: Params) => {
  const { identifier } = await params;
  const skills = await getSkills();
  const selectedSkill = skills.find((skill) => skill.id === identifier);
  if (!selectedSkill) {
    return <div>Skill not found</div>;
  }
  return (
    <div>
      <p> {selectedSkill.name}</p>
      <p> {selectedSkill.category}</p>
      <p> {selectedSkill.description}</p>
      <p> {selectedSkill.createdAt}</p>
      <p> {selectedSkill.updatedAt}</p>
    </div>
  );
};

export default Detailspage;
