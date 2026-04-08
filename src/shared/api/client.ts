const BASE_URL = 'https://api.test.cyberia.studio/api/v1';

export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
  status: number;
}

export async function apiClient<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;

  const headers = {
    'Content-Type': 'application/json',
    ...(options?.headers || {}),
  };

  const config: RequestInit = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(url, config);

    if (response.ok) {
      const text = await response.text();
      return text ? JSON.parse(text) : ({} as T); 
    }

    const errorData = await response.json().catch(() => ({}));

    const error: ApiError = {
      message: errorData.message || 'Произошла ошибка при запросе',
      errors: errorData.errors, 
      status: response.status,
    };
    
    throw error;
  } catch (error) {
    throw error;
  }
}