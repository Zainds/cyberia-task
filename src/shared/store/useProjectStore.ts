import { create } from 'zustand';
import { apiClient } from '../api/client';
import { Project, Category, mockProjects, mockCategories } from '../api/mockData';

interface ApiResponse<T> {
  items: T;
}

interface ProjectState {
  projects: Project[];
  categories: Category[];
  activeCategoryId: number | null;
  isLoading: boolean;
  
  fetchData: () => Promise<void>;
  setActiveCategory: (id: number | null) => void;
}

export const useProjectStore = create<ProjectState>((set) => ({
  projects: [],
  categories: [],
  activeCategoryId: null,
  isLoading: false,

  setActiveCategory: (id) => set({ activeCategoryId: id }),

  fetchData: async () => {
    set({ isLoading: true });
    try {
      const [projectsResponse, categoriesResponse] = await Promise.all([
        apiClient<ApiResponse<Project[]>>('/projects'),
        apiClient<ApiResponse<Category[]>>('/project-categories')
      ]);
      
      set({ 
        projects: projectsResponse.items, 
        categories: categoriesResponse.items,
        isLoading: false 
      });
    } catch (error) {
      console.warn('API недоступно. Используем моковые данные.', error);
      set({ 
        projects: mockProjects, 
        categories: mockCategories,
        isLoading: false 
      });
    }
  }
}));