import styles from "./ProjectCard.module.scss";
import { Project } from "@/shared/api/mockData";
import Image from "next/image";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={styles.card}>
      <Image
        src={project.image}
        alt={project.title}
        className={styles.image}
        width={387}
        height={378}
      />

      <div className={styles.overlay}>
        <div className={styles.iconWrapper}>
          <h3 className={styles.title}>{project.title}</h3>
        </div>
      </div>
    </div>
  );
}
