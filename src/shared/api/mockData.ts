export interface Category {
  id: number;
  name: string;
}

export interface Project {
  id: number;
  title: string;
  image: string; 
  categories: Category[]; 
}

export const mockCategories: Category[] = [
  { id: 1, name: 'Продвижение' },
  { id: 2, name: 'Разработка' },
  { id: 3, name: 'Мобильные приложения' },
  { id: 4, name: 'Юзабилити - аудит' },
];

export const mockProjects: Project[] = [
  { id: 1, title: 'Foodzo', image: '/foodzo.png', categories: [{ id: 1, name: 'Продвижение' }] },
  { id: 2, title: 'Interior Agency', image: '/interior.png', categories: [{ id: 2, name: 'Разработка' }] },
  { id: 3, title: 'The one', image: '/theone.png', categories: [{ id: 3, name: 'Мобильные приложения' }] },
  { id: 4, title: 'Flowers Store', image: '/flowers.png', categories: [{ id: 1, name: 'Продвижение' }] },
  { id: 5, title: 'Sweater', image: '/sweater.png', categories: [{ id: 2, name: 'Разработка' }] },
  { id: 6, title: 'Газпром', image: '/gazprom.png', categories: [{ id: 3, name: 'Мобильные приложения' }] },
];