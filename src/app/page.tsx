import FeedbackSection from "@/components/FeedbackSection/FeedbackSection";
import Breadcrumbs from "@/shared/ui/Breadcrumbs/Breadcrumbs";
import styles from "./page.module.scss";
import ProjectsBoard from "@/components/ProjectsBoard/ProjectsBoard";

export default function Home() {
  const breadcrumbsData = [
    { label: "Главная", href: "/" },
    { label: "Кейсы" }, 
  ];

  return (
    <>
      <section className={styles.pageSection}>
        <div className={styles.container}>
          <Breadcrumbs items={breadcrumbsData} />

          <h1 className={styles.pageTitle}>Кейсы</h1>

          <ProjectsBoard />
        </div>
      </section>

      <FeedbackSection />
    </>
  );
}
