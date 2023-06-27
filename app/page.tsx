import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <ul>
        <li>
          {" "}
          <Link href="/projects">Go to projects</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="/create">Create project</Link>{" "}
        </li>
      </ul>
    </>
  );
}
