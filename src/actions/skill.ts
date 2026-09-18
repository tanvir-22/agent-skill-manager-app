"use server" //make it serveraction
import { addSkills } from "@/app/skills/Skills";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function createSkill(prevstate: any, formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const category = formData.get("category") as string;
  if (!name || !description || !category) {
    return { error: "please fill all the fields" };
  }
  const newSkill = {
    id: Date.now().toString(),
    name,
    description,
    category,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  addSkills(newSkill);
  revalidatePath("/skills");
  redirect("/skills");
}
