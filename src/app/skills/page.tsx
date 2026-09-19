import React from 'react'
import { getSkills, skills } from './Skills'
import Link from 'next/link';
const page = async() => {
  const skills = await getSkills();
  return (
    <div className="max-w-xl mx-auto p-10">
      <div className=" text-center  mb-6">
        <h1 className="bg-base-200 p-2 text-2xl  font-bold">Skills</h1>
      </div>

      {skills.length === 0 ? (
        <div className="text-center text-base-content/50 py-12 ">
          No skills yet. Create your first one!
        </div>
      ) : (
        <ul className="py-20 px-30 mx-auto menu text-2xl bg-base-300 rounded-box shadow-md">
          {skills.map((item) => (
            <li key={item.id}>
              <Link
                href={`/skills/${item.id}`}
                className=" flex justify-between items-center gap-3 py-3"
              >
                <span className="font-medium">{item.name}</span>
                {item.category && (
                  <span className="badge badge-outline badge-sm">
                    {item.category}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-5">
        <Link href="/skills/create" className="w-full btn btn-primary btn-sm">
          Create new skill
        </Link>
      </div>
    </div>
  );
}

export default page