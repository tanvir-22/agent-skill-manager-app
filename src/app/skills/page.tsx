import React from 'react'
import { getSkills, skills } from './Skills'
import Link from 'next/link';
const page = async() => {
  const skills = await getSkills();
  return (
    <>
      <div>skills page</div>
      <Link href={"/skills/create"}> create new skills </Link>
      {
        skills.map((item)=>{
          return <Link key={item.id} href={`/skills/${item.id}`}>{item.name}</Link>
        })
      }
    </>
  );
}

export default page