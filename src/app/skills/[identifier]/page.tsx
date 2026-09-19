import React from "react";
import { getSkills, Skills, skills } from "../Skills";
import GlobalNotFound from "@/app/global-not-found";
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
    return GlobalNotFound();
  }
  return (
    <section className="mt-20">
      <div className="card w-full max-w-md mx-auto bg-base-100 shadow-xl border border-base-300">
        <div className="card-body">
          <div className="flex items-start justify-between">
            <h2 className="card-title">{selectedSkill.name}</h2>
            <div className="badge badge-primary badge-outline">
              {selectedSkill.category}
            </div>
          </div>

          <p className="text-base-content/80 leading-relaxed">
            {selectedSkill.description}
          </p>

          <div className="divider my-2"></div>

          <div className="flex flex-col gap-1 text-xs text-base-content/50">
            <span>
              Created: {new Date(selectedSkill.createdAt).toLocaleDateString()}
            </span>
            <span>
              Updated: {new Date(selectedSkill.updatedAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detailspage;
