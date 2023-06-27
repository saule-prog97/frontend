import axios from "axios";
import Link from "next/link";

export const metadata = {
  title: "Projects",
  description: "Generated by create next app"
};

async function getData() {
  try {
    const data = await fetch("http://localhost:4000/projects", {
      next: {
        revalidate: 30
      }
    });
    return data.json();
  } catch {}
}

export default async function Projects() {
  const projects = await getData();
  console.log(projects);
  return (
    <>
      <h1>Projects</h1>
      <ul>
        {projects.map((value: any) => (
          <li key={value.nameProject}>
            <Link href={`/projects/${value.nameProject}`}>
              {value.nameProject}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
