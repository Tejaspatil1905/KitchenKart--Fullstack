// API utility functions
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';
const API_URL_PREFIX = import.meta.env.VITE_API_URL || '/api';

// Helper function to get the full API URL
export const getApiUrl = (endpoint) => {
  // If we have a base URL, use it with the endpoint
  if (API_BASE_URL) {
    return `${API_BASE_URL}${endpoint}`;
  }
  
  // For relative URLs (GitHub Pages deployment)
  return `${API_URL_PREFIX}${endpoint}`;
};

// Generic API request function
export const apiRequest = async (endpoint, options = {}) => {
  const url = getApiUrl(endpoint);
  
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

// Specific API methods
export const api = {
  // GET request
  get: (endpoint) => apiRequest(endpoint, { method: 'GET' }),
  
  // POST request
  post: (endpoint, data) => apiRequest(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  
  // PUT request
  put: (endpoint, data) => apiRequest(endpoint, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  
  // DELETE request
  delete: (endpoint) => apiRequest(endpoint, { method: 'DELETE' }),
};

export default api;
