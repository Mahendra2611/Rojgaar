// utils/api.js
export const apiCall = async (url, method = 'GET', body = null, credentials = 'include') => {
    console.log(url)
    try {
      const headers = {
        'Content-Type': 'application/json',
      };
  
      const options = {
        method,
        credentials,
        headers,
      };
  
      if (body) {
        options.body = JSON.stringify(body);
      }
  
      const response = await fetch(url, options);
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
  
      return data;
    } catch (error) {
      throw error; 
    }
  };
  