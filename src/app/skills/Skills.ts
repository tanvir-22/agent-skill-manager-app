export type Skills = {
  id: string;
  name: string;
  description: string;
  category: string;
  createdAt: string;
  updatedAt: string;
};

export let skills: Skills[] = [
  {
    id: "1",
    name: "Programming",
    description: "Description 1",
    category: "Category 1",
    createdAt: "2022-01-01",
    updatedAt: "2022-01-01",
  },
  {
    id: "2",
    name: "Painting",
    description: "Description 2",
    category: "Category 2",
    createdAt: "2022-01-02",
    updatedAt: "2022-01-02",
  },
];

export async function getSkills() {
  return [...skills];
}
export async function addSkills(skill: Skills) {
  skills = [skill, ...skills];
}
