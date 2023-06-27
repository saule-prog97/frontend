import axios from "axios";
import Link from "next/link";

type Props = {
  params: {
    project: string;
  };
};

export function generateMetadata({ params: { project } }: Props) {
  return {
    title: project
  };
}

async function getData(project: string) {
  console.log(111);
  try {
    const data = await axios.get(`http://localhost:4000/projects/${project}`);
    return data.data;
  } catch {}
}

export default async function Project({ params: { project } }: Props) {
  const projects = await getData(project);
  return (
    <>
      <h1> {project}</h1>
      <p>about 1 {projects.aboutProject.textOne}</p>
      <p>about 2 {projects.aboutProject.textTwo}</p>
      <p>price coin {projects.coinPrice}</p>
      <p>name coin {projects.nameCoin}</p>
      <p>allocation {projects.allocation}</p>
      <p>
        <Link href="/projects">Go back</Link>
      </p>
    </>
  );
}
