"use client";

import { useEffect } from 'react';
import clsx from 'clsx';
import { useProjectStore } from '@/shared/store/useProjectStore';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './ProjectsBoard.module.scss';

export default function ProjectsBoard() {
  const {
    projects,
    categories,
    activeCategoryId,
    isLoading,
    fetchData,
    setActiveCategory
  } = useProjectStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const filteredProjects = activeCategoryId
    ? projects.filter((p) => 
        p.categories?.some((cat) => cat.id === activeCategoryId)
      )
    : projects;

  if (isLoading) {
    return <div className={styles.loading}>Загрузка проектов...</div>;
  }

  return (
    <div className={styles.board}>
      <div className={styles.filters}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={clsx(styles.filterBtn, activeCategoryId === cat.id && styles.active)}
            onClick={() => setActiveCategory(activeCategoryId === cat.id ? null : cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}